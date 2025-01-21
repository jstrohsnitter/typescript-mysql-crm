"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Client = require('pg').Client;
//import promptSync from "prompt-sync";
//======================CONNECT TO DB===========================================
var client = new Client({
    user: 'macbook',
    host: 'localhost',
    database: 'tyscrm',
    password: 'none',
    port: 5432,
});
//========APP=================================================================================================
var app = function () { return __awaiter(void 0, void 0, void 0, function () {
    var greet, newEmployeePrompt_1, newCompany_id_1, newEmployeeCrm, newCompanyPrompt_1, newCompanyCrm, viewCrm, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, 9, 11]);
                return [4 /*yield*/, client.connect()
                        .then(function () { return console.log('Connected to PostgreSQL!'); })
                        .catch(function (err) { return console.error('Connection error:', err); })];
            case 1:
                _a.sent();
                greet = prompt("Hello User! What would you like to do?\nAdd an employee? Enter 'Add Employee'.\nAdd Company? Enter 'Add Company'. \nView Employees? Type 'View Employees'\n");
                if (!(greet === 'Add Employee')) return [3 /*break*/, 3];
                newEmployeePrompt_1 = prompt("Enter employee name ");
                newCompany_id_1 = Number(prompt("Enter company id (number) "));
                newEmployeeCrm = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newEmployee, values, res, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                newEmployee = "INSERT INTO crm(employee_name, company_id) VALUES($1, $2)";
                                values = ["".concat(newEmployeePrompt_1), "".concat(newCompany_id_1)];
                                return [4 /*yield*/, client.query(newEmployee, values)];
                            case 1:
                                res = _a.sent();
                                console.log('inserted:', res);
                                return [3 /*break*/, 3];
                            case 2:
                                err_2 = _a.sent();
                                console.error('Error:', err_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, newEmployeeCrm()];
            case 2:
                _a.sent();
                return [3 /*break*/, 7];
            case 3:
                if (!(greet === 'Add Company')) return [3 /*break*/, 5];
                newCompanyPrompt_1 = prompt("Enter company name ");
                newCompanyCrm = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newCompany, values, res, err_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                newCompany = "INSERT INTO companies(company) VALUES($1)";
                                values = ["".concat(newCompanyPrompt_1)];
                                return [4 /*yield*/, client.query(newCompany, values)];
                            case 1:
                                res = _a.sent();
                                console.log('inserted:', res);
                                return [3 /*break*/, 3];
                            case 2:
                                err_3 = _a.sent();
                                console.error('Error:', err_3);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, newCompanyCrm()];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5:
                if (!(greet === 'View Employees')) return [3 /*break*/, 7];
                viewCrm = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var viewEmployees, res, err_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                viewEmployees = "SELECT * FROM crm";
                                return [4 /*yield*/, client.query(viewEmployees)];
                            case 1:
                                res = _a.sent();
                                console.log(res.rows);
                                return [3 /*break*/, 3];
                            case 2:
                                err_4 = _a.sent();
                                console.error('Error:', err_4);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, viewCrm()];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [3 /*break*/, 11];
            case 8:
                err_1 = _a.sent();
                console.error('Error:', err_1);
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, client.end()];
            case 10:
                _a.sent();
                console.log('Client disconnected.');
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
app();
// const allCompanies = client.query('SELECT * FROM companies', (err, res) => {
//     if (err) {
//       console.error('Error executing query:', err);
//     } else {
//       console.log(res.rows[0]);
//     }
//     client.end();
//   })
//   const newEmployee = 'INSERT INTO crm(employee_name, company_id) VALUES($1, $2)'
//   const values = ['ted', '2']
//   console.log(res)
// import inquirer from 'inquirer';
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     "Hello"
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
