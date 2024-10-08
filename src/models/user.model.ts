import { User } from "../entities/user.entity";
import { IUserModel } from "./interfaces/user.model.interface";
import { QueryResult } from 'pg';
const pool = require('../config/db.config')

export class UserModel implements IUserModel{
  public async getUserByEmail(email: string): Promise<User> {
    const client = await pool.connect();
    let result: QueryResult<User>;

    try {
      result = await client.query(`
              SELECT 
                "user".id,
                "user".email,
                "user".password
              FROM 
                "user"
              WHERE
                "user".email = $1;`,
              [email]
              );

    } catch (error) {
      console.error('Erro ao selecionar usuário', error);
      throw error;

    } finally {
      client.release();
    }
  
    return result.rows[0];
  }
  public async getUser(id: number): Promise<User> {
    const client = await pool.connect();
    let result: QueryResult<User>;

    try {
      result = await client.query(`
        SELECT 
          user.id,
          user.email
        FROM 
          user
        WHERE
          user.id = $1;`,
        [id]
        );

    } catch (error) {
      console.error('Erro ao selecionar usuário', error);
      throw error;

    } finally {
      client.release();
    }
  
    return result.rows[0];
  }
  public async editUser(id: number, email: string, password: string): Promise<User> {
    const client = await pool.connect();
    let result: QueryResult<User>;

    try {
      result = await client.query(`
        UPDATE user 
        SET email = $1,
        password = $2
        WHERE
        user.id = $3
        RETURNING *;`,
        [email,password,id]
      );
    } catch (error) {
      console.error('Erro ao editar professor', error);
      throw error;
    } finally {
      client.release();
    }

    return result.rows[0];
  }
  public async deleteUser(id: number): Promise<User> {
    const client = await pool.connect();
    let result: QueryResult<User>;

    try {
      result = await client.query(`
        DELETE
        FROM user
        WHERE
        user.id = $1
        RETURNING *;`,
        [id]
      );
    } catch (error) {
      console.error('Erro ao deletar professor', error);
      throw error;
    } finally {
      client.release();
    }

    return result.rows[0];
  }
  public async createUser(email: string, password: string, teacherId: number): Promise<User> {
    const client = await pool.connect();
    let result: QueryResult<User>;

    try {
      result = await client.query(`
        INSERT INTO
          "user" (email, password, teacherId)
        VALUES
          ($1, $2, $3)
        RETURNING *;`,
        [email, password, teacherId]
        );

    } catch (error) {
      console.error('Erro ao inserir usuário', error);
      throw error;

    } finally {
      client.release();
    }
  
    return result.rows[0];
  }
}