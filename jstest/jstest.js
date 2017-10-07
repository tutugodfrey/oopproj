const assert = require("chai").assert;
const expect = require("chai").expect;
const CompObj = require("../src/compobj.js");
const MyCompany = new CompObj.Company("MacDonald", "Warri", 14, 450);
const Staff = new CompObj.Staff("MacDonald", "Tutu Godfrey", 450000, "Drilling Engineer");
var CompanyInfo = {
	companyName: "MacDonald",
	companyLocation: "Warri",
	numberOfStaff: 14,
	allowance: 450,
}
var StaffInfo = {
	staffName: "Tutu Godfrey",
	staffPosition: "Drilling Engineer",
	staffPay: 450000,
}

describe ("Object Oriented Programming", () => {
	describe("Company class", () => {
		it("shuold export a company object", () => {
			expect(CompObj.Company).to.be.a("function")
		});

		it("should create a new company object", () => {
			
			expect(MyCompany).to.be.a("Object")
		});

		it("should retutn the company info", () => {
			var companyInfo = CompanyInfo.companyName + " is located at " + CompanyInfo.companyLocation + " and " 
		+ CompanyInfo.companyName + " is currently being staffed by a total of " + CompanyInfo.numberOfStaff + ".";
			expect(MyCompany.getInfo()).to.equal(companyInfo)
		});

		it("should print the number of staff", () => {
			expect(MyCompany.numberOfStaff()).to.equal(14)
		});

		it("should  return company location", () => {
			expect(MyCompany.companyLocation()).to.equal(CompanyInfo.companyLocation)
		});
	});

	describe("staff class", () => {
		it("extend the company class", () => {
			expect(CompObj.Staff).to.be.a("function")
		});
		it("extend the company class", () => {
			expect(Staff).to.be.a("Object")
		});
		it("Staff should be an instance of Company", () => {
			//expect(Staff).to.be.a("Object")
			assert.instanceOf(Staff, CompObj.Company)
		});
		it("should contain property staffPay", () => {
			expect(Staff).to.contain.property("staffPay")
		});
		it("should have property compName", () => {
			expect(Staff).to.have.property("compName")
		});
		it("should return the information about the staff", () => {
			let staffInformation = StaffInfo.staffName + " is a " + StaffInfo.staffPosition + " in " + CompanyInfo.companyName + " and is earning " + StaffInfo.staffPay + " monthly" ;
			expect(Staff.getInfo()).to.be.equal(staffInformation)
		});
	});
})