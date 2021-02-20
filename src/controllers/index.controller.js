const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'odoo',
    password: 'x1234567890',
    database: 'firstapi',
    port: '5432'
})
 

const getUsers = async(req, res) =>{
     const response = await pool.query('SELECT * FROM users');
     res.status(200).json(response.rows);
     // console.log(response.rows);
     // res.send('users');     
}

const getUserById = async( req, res ) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
    // res.send('User Id: ' + req.params.id); 
}

const updateUser = async( req, res ) => {
    const id = req.params.id
    const { name, email } = req.body; 
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name, 
        email,
        id
    ]);
    // const response = await pool.query('UPDATE FROM users WHERE id = $1', [id]);
    // console.log(response);
    console.log(name);
    console.log(email);
    res.json(`Usuario Actualizado: ${ id }`);

}


const deleteUserById = async( req, res ) => {
    const id = req.params.id
     
    res.json(`Usuario Eliminado: ${ id }`);
}


const createUsers = async(req, res) =>{
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ( $1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User add',
        body: {
            user: { name, email }
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    deleteUserById,
    updateUser,
    createUsers
}

/*
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
('joe','joe@asas.com'),
('marlon','marlon@asas.com');

*/