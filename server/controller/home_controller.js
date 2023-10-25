const db = require("../db/database");
const fs = require("fs");

const home_controller = (req, res) => {
	// create table queries
	var create_property_table = fs.readFileSync("./sql/create/create_property_table.sql").toString();

	// insert table queries
	var insert_agent_table = fs.readFileSync("./sql/insert/insert_agent_table.sql").toString();
	var insert_broker_table = fs.readFileSync("./sql/insert/insert_broker_table.sql").toString();
	var insert_location_table = fs.readFileSync("./sql/insert/insert_location_table.sql").toString();
	var insert_listing_table = fs.readFileSync("./sql/insert/insert_listing_table.sql").toString();
	var insert_property_table = fs.readFileSync("./sql/insert/insert_property_table.sql").toString();
	var insert_property_type_table = fs.readFileSync("./sql/insert/insert_property_type_table.sql").toString();

	const allData = req.body;

	// use the database
	db.query("USE relational_db;", (dbErr, res) => {
		if (dbErr) {
			console.log("Could not access DB: ");
			return;
		}

		allData.forEach((data) => {

			//// insert agent
			const agentData = data?.agent;
			let agentValues = [
				parseInt(agentData?.id),
				agentData?.email,
				agentData?.image,
				agentData?.is_super_agent,
				agentData?.name,
				agentData?.slug,
				agentData?.social,
				parseInt(agentData?.user_id),
			];
			db.query(insert_agent_table, agentValues, (dbErr, res) => {
				if (dbErr) {
					console.log("Could not create agent: ", dbErr.message);
					return;
				}
				console.log("Table 'agent' created: ");
			});

			//// insert broker
			const brokerData = data?.broker;
			let brokerValues = [
				parseInt(brokerData?.id),
				brokerData?.address,
				brokerData?.email,
				brokerData?.logo,
				brokerData?.name,
				brokerData?.phone,
				brokerData?.slug,
			];

			db.query(insert_broker_table, brokerValues, (dbErr, res) => {
			    if (dbErr) {
			        console.log("Could not create broker: ", dbErr.message);
			        return;
			    }
			    console.log("Table 'broker' created: ");
			});

			
			//// insert listing
			const listingValues = [
				parseInt(data?.id),
				data?.has_view_360,
				data?.is_available,
				data?.is_broker_project_property,
				data?.is_claimed_by_agent,
				data?.is_community_expert,
				data?.is_cts,
				data?.is_direct_from_developer,
				data?.is_exclusive,
				data?.is_featured,
				data?.is_new_construction,
				data?.is_new_insert,
				data?.is_premium,
				data?.is_smart_ad,
				data?.is_spotlight_listing,
				data?.is_under_offer_by_competitor,
				data?.is_verified,
				data?.listed_date,
				data?.listing_level,
				data?.listing_level_label,
			];

			db.query(insert_listing_table, listingValues, (dbErr, res) => {
				if (dbErr) {
					console.log("Could not create listing: ", dbErr.message);
					return;
				}
				console.log("Table 'listing' created: ");
			});


			//// insert location
			const locationData = data?.location;
			let locationValues = [
				parseInt(locationData?.id),
				parseFloat(locationData?.coordinates?.lat),
				parseFloat(locationData?.coordinates?.lon),
				locationData?.full_name,
				locationData?.path,
				locationData?.slug,
				locationData?.type,
			];

			db.query(insert_location_table, locationValues, (dbErr, res) => {
				if (dbErr) {
					console.log("Could not create location: ", dbErr.message);
					return;
				}
				console.log("Table 'location' created: ");
			});


			//// insert property_type
			const propertyTypeValues = [
				data?.property_type_id,
				data?.property_type,
			];

			db.query(
				insert_property_type_table,
				propertyTypeValues,
				(dbErr, res) => {
					if (dbErr) {
						console.log(
							"Could not create property_type: ",
							dbErr.message
						);
						return;
					}
					console.log("Table 'property_type' created: ");
				}
			);

    		//// creating and inserting data to property
			const propertyValues = [
				parseInt(data?.id),
				parseInt(agentData?.id),
				parseInt(brokerData?.id),
				parseInt(locationData?.id),
				parseInt(data?.property_type_id),
				parseInt(data?.bathrooms),
				parseInt(data?.bedrooms),
				data?.description,
				data?.furnished,
				data?.images[0]?.medium,
				data?.offering_type,
				parseInt(data?.price.value),
				data?.price?.period,
				data?.reference,
				data?.rera,
				data?.share_url,
				data?.title,
			];

			db.query(create_property_table, (dbErr, res) => {
				if (dbErr) {
					console.log("Could not create property: ", dbErr.message);
					return;
				}
				db.query(
					insert_property_table,
					propertyValues,
					(dbErr, res) => {
						if (dbErr) {
							console.log(
								"Could not insert property: ",
								dbErr.message
							);
							return;
						}
						console.log("Table 'property' created: ");
					}
				);
			});
		});
	});
};

module.exports = home_controller;
