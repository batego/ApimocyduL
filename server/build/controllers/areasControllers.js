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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areasController = void 0;
const database_1 = __importDefault(require("../database"));
const joi_1 = __importDefault(require("joi"));
class AreasControllers {
    list(req, res) {
        database_1.default.query('SELECT * FROM areas order by nombre;').then((rows) => {
            res.json(rows);
        });
        //res.json(games);
    }
    getOne(req, res) {
        const { codigo } = req.params;
        database_1.default.query('SELECT * FROM areas where codigo = ?', [codigo]).then((items) => {
            res.json(items[0]);
        });
        //res.json('areass:  '+ req.params.id );
    }
    create(req, res) {
        const schema = {
            nombre: joi_1.default.string().required().max(50),
            lider: joi_1.default.number().integer().required(),
            estado: joi_1.default.boolean()
        };
        joi_1.default.validate(req.body, schema, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ status: 'Error', mensaje: err.details[0].message });
            }
            else {
                database_1.default.query('INSERT INTO areas set ?', [req.body]).then((rows) => {
                    console.log(rows);
                });
            }
            console.log(result);
            res.send([{ status: 'success', message: 'Area Saved' }]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const schema = {
                nombre: joi_1.default.string().required().max(50),
                lider: joi_1.default.number().integer().min(2).required(),
                estado: joi_1.default.boolean()
            };
            joi_1.default.validate(req.body, schema, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send({ status: 'Error', mensaje: err.details[0].message });
                }
            });
            yield database_1.default.query('update areas set ? where codigo = ?', [req.body, codigo]);
            res.json({ status: 'success', message: `The area ${codigo} was updated` });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('delete from areas where codigo = ?', [codigo]).catch(err => {
                res.json({ Error: err });
            });
            res.json({ status: 'success', message: `The Area ${codigo} was deleted` });
        });
    }
}
exports.areasController = new AreasControllers();
