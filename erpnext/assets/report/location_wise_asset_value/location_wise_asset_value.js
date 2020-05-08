// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Location-wise Asset Value"] = {
	"filters": [
		{
			fieldname:"company",
			label: __("Company"),
			fieldtype: "Link",
			options: "Company",
			default: frappe.defaults.get_user_default("Company"),
			reqd: 1
		},
		{
			fieldname:"purchase_date",
			label: __("Purchase Date"),
			fieldtype: "Date"
		},
		{
			fieldname:"available_for_use_date",
			label: __("Available For Use Date"),
			fieldtype: "Date"
		},
		{
			fieldname:"cost_center",
			label: __("Cost Center"),
			fieldtype: "Link",
			options: "Cost Center"
		},
		{
			fieldname:"finance_book",
			label: __("Finance Book"),
			fieldtype: "Link",
			options: "Finance Book"
		},
		{
			fieldname:"is_existing_asset",
			label: __("Is Existing Asset"),
			fieldtype: "Check"
		},
	]
};