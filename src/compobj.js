"use strict"
/*
 this class definition for management of the and their staffing activities
 */
//module.exports = {
class Company {
	constructor (compName, compLocation, numStaff, startOffYear){
		 this.compName = compName;
		 this.compLocation = compLocation;
		 this.numStaff = numStaff;
		 this.startOffYear = startOffYear;
	}

	getInfo(){
		return this.compName + " is located at " + this.compLocation + " and " 
		+ this.compName + " is currently being staffed by a total of " + this.numStaff + ".";
	}

	numberOfStaff(){
		return this.numStaff;
	}

	companyLocation(){
		return this.compLocation;
	}

}

class Staff extends Company {
	
	constructor (compName, staffName, staffPay, staffPosition){
		super(compName)
		this.staffName = staffName;
		//this.staffAge = staffAge;
		this.staffPay = staffPay;
		this.staffPosition = staffPosition; 
	}
	
	getInfo(){
		return this.staffName + " is a " + this.staffPosition + " in " + this.compName + " and is earning " + this.staffPay + " monthly" ;
	}  
}


class Manager extends Company {
	constructor(compname, complocation, numstaff, allowance){
		super();
		this.compname = compname;
		 this.complocation = complocation;
		 this.numstaff = numstaff;
		 this.allowance = allowance;
	}

}


//}  //end export block

module.exports = {
	Company,
	Staff,
}