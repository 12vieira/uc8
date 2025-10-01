import {openDatabaseSync} from "expo-sqlite"

const db = openDatabaseSync("cidadaos.db");

/**
 * @returns{Promise}
 */

export function initDB() {
  return db.execAsync(`
        CREATE TABLE IF NOT EXISTS citizens (
            id INTEGER PRIMARY KEY NOT NULL,
            auto-incremento
            cpf TEXT NOT NULL UNIQUE,
            obrigatório
            name TEXT NOT NULL,
            obrigatório
            birth TEXT,
            cep TEXT,
            street TEXT,
            av, etc.
            neighborhood TEXT,
            city TEXT,
            state TEXT,
            number TEXT,
            complement TEXT
            bloco, etc.
        );
        
    `);
}