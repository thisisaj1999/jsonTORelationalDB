const mysql = require("mysql");
const fs = require('fs')

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "rel_db",
});

	var create_db_sql = fs.readFileSync("./sql/create/create_db.sql").toString();
	var create_agent_table = fs.readFileSync("./sql/create/create_agent_table.sql").toString();
	var create_broker_table = fs.readFileSync("./sql/create/create_broker_table.sql").toString();
	var create_listing_table = fs.readFileSync("./sql/create/create_listing_table.sql").toString();
	var create_location_table = fs.readFileSync("./sql/create/create_location_table.sql").toString();
	var create_property_type_table = fs.readFileSync("./sql/create/create_property_type_table.sql").toString();

// DB Connection
db.connect((err) => {
	if (err) {
		console.log(
			"Cannot connect to MySQL, make sure your local credentials match the settings in the 'index.js' file in the 'db' folder: "
		);
		return;
	}

	console.log("Connected to DB!");

	// Create the database
	db.query(create_db_sql, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create DB: ");
			return;
		}
		console.log("Database created: ");
	});

	// use the database
	db.query("USE relational_db;", (dbErr, res) => {
		if (dbErr) {
			console.log("Could not access DB: ");
			return;
		}
		console.log("Database accessed: ");
	});

	// create the tables
	//// Create agent
	db.query(create_agent_table, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create agent: ");
			return;
		}
		console.log("Table 'agent' created: ");
	});

	//// Create broker
	db.query(create_broker_table, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create broker: ");
			return;
		}
		console.log("Table 'broker' created: ");
	});

	//// Create LISTING
	db.query(create_listing_table, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create listing: ");
			return;
		}
		console.log("Table 'listing' created: ");
	});

	//// Create Location
	db.query(create_location_table, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create location: ");
			return;
		}
		console.log("Table 'location' created: ");
	});

	// Create property_type
	db.query(create_property_type_table, (dbErr, res) => {
		if (dbErr) {
			console.log("Could not create property_type: ");
			return;
		}
		console.log("Table 'property_type' created: ");
	});
});

module.exports = db;
