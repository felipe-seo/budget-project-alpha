const express=require('express');
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('./'));
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: "Database@374",
  host: 'localhost',  
  port: 5432,
  database: 'postgres'
});

// Method GET
app.get("/:id", (req, res) => {
    idGet = req.params.id;
    
    // async/await - check out a client
    ;(async () => {
      const client = await pool.connect()
      try {
        const res = await client.query(`SELECT * FROM ${idGet} WHERE deleted IS NULL`)
        console.log("Consulta realizada!")
        console.log(res.rows)
      } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
      }
    })().catch(err => console.log(err.stack))
})



// Method POST
app.post("/users", (req, res) => {
  //id_user	= req.body.id_user;
  first_name_user = req.body.first_name;
  last_name_user = req.body.last_name;
  email = req.body.email;
  phone_ddd = req.body.phone_ddd;
  phone_number = req.body.phone_number;
  address	= req.body.address;
  city = req.body.city;
  uf	= req.body.uf;
  zip_code =  req.body.zip_code;
  birth_date	= req.body.birth_date;
  creation_date	= req.body.creation_date;
  name_user	= req.body.name_user;
  passwd = req.body.passwd;
  
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO users (first_name_user, last_name_user, email, phone_ddd, phone_number, address, city, uf, zip_code, birth_date, creation_date, name_user, passwd) 
      VALUES ('${first_name_user}', '${last_name_user}', '${email}', '${phone_ddd}', '${phone_number}', '${address}', '${city}', '${uf}', '${zip_code}', '${birth_date}', '${creation_date}', '${name_user}', '${passwd}')`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})



app.post("/products", (req, res) => {
  //id_user	= req.body.id_user;
  product_name = req.body.product_name;
  qt_product = req.body.qt_product;
  serial_number = req.body.serial_number;
  creation_date = req.body.creation_date;
  sale_value = req.body.sale_value;
  id_supplier = req.body.id_supplier;
  id_group = req.body.id_group;
  id_user = req.body.id_user;  
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO products (product_name, qt_product, serial_number, creation_date, sale_value, id_supplier, id_group, id_user) 
      VALUES ('${product_name}', ${qt_product}, '${serial_number}', '${creation_date}', ${sale_value}, ${id_supplier}, ${id_group}, ${id_user})`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.post("/suppliers", (req, res) => {
  //id_user	= req.body.id_user;
  name_supplier	= req.body.name_supplier;
  doc_ident	= req.body.doc_ident;
  responsible_person	= req.body.responsible_person;
  email	= req.body.email;
  phone_ddd	= req.body.phone_ddd;
  phone_number	= req.body.phone_number;
  address	= req.body.address;
  city = req.body.city;
  uf = req.body.uf;
  zip_code	= req.body.zip_code;
  creation_date	= req.body.creation_date;
  id_user	= req.body.id_user;
  console.log(req.body);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO suppliers (name_supplier, doc_ident, responsible_person, email, phone_ddd, phone_number, address, city, uf, zip_code, creation_date, id_user ) 
      VALUES ('${name_supplier}', '${doc_ident}', '${responsible_person}', '${email}', '${phone_ddd}', '${phone_number}', '${address}', '${city}', '${uf}', '${zip_code}', '${creation_date}', ${id_user})`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.post("/clients", (req, res) => {
  //id_user	= req.body.id_user;
  first_name = req.body.first_name;
  last_name = req.body.last_name;
  documents = req.body.documents;
  email = req.body.email;
  phone_ddd = req.body.phone_ddd;
  phone_number = req.body.phone_number;
  address = req.body.address;
  city = req.body.city;
  uf = req.body.uf;
  zip_code = req.body.zip_code;
  birth_date = req.body.birth_date;
  creation_date = req.body.creation_date;
  id_user_client = req.body.id_user_client;
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO clients (first_name, last_name, documents, email, phone_ddd, phone_number, address, city, uf, zip_code, birth_date, creation_date, id_user_client ) 
      VALUES ('${first_name}', '${last_name}', '${documents}', '${email}', '${phone_ddd}', '${phone_number}', '${address}', '${city}', '${uf}', '${zip_code}', '${birth_date}', '${creation_date}', ${id_user_client})`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.post("/products_group", (req, res) => {
  //id_user	= req.body.id_user;
  name_group = req.body.name_group;
  creation_date = req.body.creation_date;
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO products_group (name_group, creation_date ) 
      VALUES ('${name_group}', '${creation_date}')`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.post("/selected_products", (req, res) => {
  //id_user	= req.body.id_user;
  id_product_selected_products = req.body.id_product_selected_products;
  product_amount = req.body.product_amount;
  product_price = req.body.product_price;
  id_budget_selected_products = req.body.id_budget_selected_products;
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO selected_products (id_product_selected_products, product_amount, product_price, id_budget_selected_products ) 
      VALUES (${id_product_selected_products}, ${product_amount}, ${product_price}, ${id_budget_selected_products})`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.post("/budgets", (req, res) => {
  //id_user	= req.body.id_user;
  id_client_budget = req.body.id_client_budget;
  id_user_budgets = req.body.id_user_budgets;
  total = req.body.total;
  amount = req.body.amount;
  budget_date = req.body.budget_date;
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`INSERT INTO budgets (id_client_budget, id_user_budgets, total, amount, budget_date ) 
      VALUES (${id_client_budget}, ${id_user_budgets}, ${total}, ${amount}, '${budget_date}')`)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

////////////////////////////////////   product_price

app.put("/users", (req, res) => {
  //id_user	= req.body.id_user;
  id_user = req.body.id_user;
  first_name_user = req.body.first_name;
  last_name_user = req.body.last_name;
  email = req.body.email;
  phone_ddd = req.body.phone_ddd;
  phone_number = req.body.phone_number;
  address	= req.body.address;
  city = req.body.city;
  uf	= req.body.uf;
  zip_code =  req.body.zip_code;
  birth_date	= req.body.birth_date;
  creation_date	= req.body.creation_date;
  name_user	= req.body.name_user;
  passwd = req.body.passwd;  
  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE users SET first_name_user = '${first_name_user}', last_name_user = '${last_name_user}', email = '${email}',
      phone_ddd = '${phone_ddd}', phone_number = '${phone_number}', address = '${address}', city = '${city}', uf = '${uf}', zip_code = '${zip_code}', birth_date = '${birth_date}',
      creation_date = '${creation_date}', name_user = '${name_user}', passwd = '${passwd}', last_update = '${last_update}' WHERE id_user = ${id_user};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/products", (req, res) => {
  id_product = req.body.id_product;
  product_name = req.body.product_name;
  qt_product = req.body.qt_product;
  serial_number = req.body.serial_number;
  creation_date = req.body.creation_date;
  sale_value = req.body.sale_value;
  id_supplier = req.body.id_supplier;
  id_group = req.body.id_group;
  id_user = req.body.id_user;  
  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE products SET product_name = '${product_name}', qt_product = ${qt_product}, serial_number = '${serial_number}',      
      creation_date = '${creation_date}', sale_value = ${sale_value}, id_supplier = ${id_supplier}, id_group = ${id_group}, id_user = ${id_user}, last_update = '${last_update}' WHERE id_product = ${id_product};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/suppliers", (req, res) => {
  id_supplier = req.body.id_supplier;
  name_supplier	= req.body.name_supplier;
  doc_ident	= req.body.doc_ident;
  responsible_person	= req.body.responsible_person;
  email	= req.body.email;
  phone_ddd	= req.body.phone_ddd;
  phone_number	= req.body.phone_number;
  address	= req.body.address;
  city = req.body.city;
  uf = req.body.uf;
  zip_code	= req.body.zip_code;
  creation_date	= req.body.creation_date;
  id_user	= req.body.id_user;
  

  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE suppliers SET name_supplier = '${name_supplier}', doc_ident = '${doc_ident}', responsible_person = '${responsible_person}',      
      email = '${email}', phone_ddd = '${phone_ddd}', phone_number = '${phone_number}', address = '${address}', city = '${city}', uf = '${uf}', zip_code = '${zip_code}', 
      creation_date = '${creation_date}', id_user = ${id_user}, last_update = '${last_update}'
      WHERE id_supplier = ${id_supplier};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/clients", (req, res) => {
  id_client = req.body.id_client;
  first_name = req.body.first_name;
  last_name = req.body.last_name;
  documents = req.body.documents;
  email = req.body.email;
  phone_ddd = req.body.phone_ddd;
  phone_number = req.body.phone_number;
  address = req.body.address;
  city = req.body.city;
  uf = req.body.uf;
  zip_code = req.body.zip_code;
  birth_date = req.body.birth_date;
  creation_date = req.body.creation_date;
  id_user_client = req.body.id_user_client;
  

  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE clients SET first_name = '${first_name}', last_name = '${last_name}', documents = '${documents}',      
      email = '${email}', phone_ddd = '${phone_ddd}', phone_number = '${phone_number}', address = '${address}', city = '${city}', uf = '${uf}', zip_code = '${zip_code}', 
      birth_date = '${birth_date}', creation_date = '${creation_date}', id_user_client = ${id_user_client}, last_update = '${last_update}'
      WHERE id_client = ${id_client};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/products_group", (req, res) => {
  id_prod_group = req.body.id_prod_group;
  name_group = req.body.name_group;
  creation_date = req.body.creation_date;
  

  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE products_group SET name_group = '${name_group}', creation_date = '${creation_date}', last_update = '${last_update}'
      WHERE id_prod_group = ${id_prod_group};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/selected_products", (req, res) => {
  id_selected_products = req.body.id_selected_products;
  id_product_selected_products = req.body.id_product_selected_products;
  product_amount = req.body.product_amount;
  product_price = req.body.product_price;
  id_budget_selected_products = req.body.id_budget_selected_products;
  

  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE selected_products SET product_amount = ${product_amount}, product_price = ${product_price}, 
      id_budget_selected_products = ${id_budget_selected_products}, last_update = '${last_update}'
      WHERE id_selected_products = ${id_selected_products};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.put("/budgets", (req, res) => {
  id_budget = req.body.id_budget;
  id_client_budget = req.body.id_client_budget;
  id_user_budgets = req.body.id_user_budgets;
  total = req.body.total;
  amount = req.body.amount;
  budget_date = req.body.budget_date;
  

  var d = new Date();
  
  last_update = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  console.log(last_update);
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE budgets SET id_client_budget = ${id_client_budget}, id_user_budgets = ${id_user_budgets}, 
      total = ${total}, amount = ${amount}, budget_date = '${budget_date}', last_update = '${last_update}'
      WHERE id_budget = ${id_budget};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

/*
app.put("/users/delete", (req, res) => {
  id_user	= req.body.id_user;

  var d = new Date();
  
  deleted = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE users SET deleted = '${deleted}' WHERE id_user = ${id_user};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})
*/

app.put("/:id/delete", (req, res) => {
  column = req.body.column;
  id_data	= req.body.id_data;
  table = req.params.id;  
    
  var d = new Date();
  
  deleted = (d.getFullYear()+'-'+(d.getMonth()+1) +'-'+ d.getDate());
  
  // async/await - check out a client
  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(`UPDATE ${table} SET deleted = '${deleted}' WHERE ${column} = ${id_data};
      
      `)
      console.log("Ação realizada!")
      console.log(res.rows)
    } finally {
      // Make sure to release the client before any error handling,
      // just in case the error handling itself throws an error.
      client.release()
    }
  })().catch(err => console.log(err.stack))
})

app.listen(3000)
