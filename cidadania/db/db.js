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

/**
 * @param {object} citizen
 * @param {object} citizen.cpf
 * @param {object} citizen.name
 * @param {object} citizen.birth
 * @param {object} citizen.cep
 * @param {object} citizen.street
 * @param {object} citizen.neighborhood
 * @param {object} citizen.city
 * @param {object} citizen.state
 * @param {object} citizen.number
 * @param {object} citizen.complement
 * 
 * @returns {Promise}
 */

export async function insertCitizen(citizen) {
  const {cpf, name, birth, cep, street, neighborhood, city, state, number, complement} = citizen;
  return db.execAsync(`
        INSERT INTO citizens (cpf, name, birth, cep, street, neighborhood, city, state, number, complement)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `, [cpf, name, birth, cep, street, neighborhood, city, state, number, complement]);
}

/**
 * @returns {Promise<array>}
 */

export async function fetchAllCitizens() {
    const result = await db.execAsync(`
        SELECT * FROM citizens ORDER BY name;
    `);
    return result;
}

/**
 * @param {number} id
 * @returns {Promise}
 */
export async function fetchCitizenById(id) {
    const result = await db.execAsync(`
        SELECT * FROM citizens WHERE id = ?;
    `, [id]);
    return result;
}

/**
 * @param {number} id
 * @returns {Promise}
 */
export async function deleteCitizenById(id) {
    return db.execAsync(`
        DELETE FROM citizens WHERE id = ?;
    `, [id]);
}

/**
 * @returns {Promise}
 */

export async function deleteAllCitizens() {
    return db.execAsync(`
        DELETE FROM citizens;
    `);
}

/**
 * @param {number} id
 * @param {object} citizen
 * @param {Promise}
 */

export async function updateCitizenById(id, citizen) {
    const {cpf, name, birth, cep, street, neighborhood, city, state, number, complement} = citizen;
    return db.execAsync(`
        UPDATE citizens
        SET cpf = ?, name = ?, birth = ?, cep = ?, street = ?, neighborhood = ?, city = ?, state = ?, number = ?, complement = ?
        WHERE id = ?;
    `, [cpf, name, birth, cep, street, neighborhood, city, state, number, complement, id]);
}