"use strict"
/*
 this class definition for management of the and their staffing activities
 */

class Company {
	constructor (compname, complocation, numstaff){
		 this.compname = compname;
		 this.complocation = complocation;
		 this.numstaff = numstaff;
	}

	companyinfo (){
		return this.compname + " is located at " + this.complocation + " and " 
		+ this.compname + " is currently being staffed by a total of this.numstaff.";
	}

	numberofstaff(){
		return this.numstaff;
	}

	complocation (){
		return this.complocation;
	}

}

class Staff extends Company {
	constructor (staffname, staffage, staffpay, staffposition){
		this.staffname = staffname;
		this.staffage = staffage;
		this.staffpay = staffpay;
		this.staffposition = position;
	}

	staffinfo(){
		return this.staffname + " a staff of " + this.compname  + " and " + this.staffname + " is earning " + this.staffpay + " monthly" ;

	}
}


