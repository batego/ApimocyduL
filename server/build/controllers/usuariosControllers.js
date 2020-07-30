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
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuariosControllers {
    list(req, res) {
        let { eventId, eventName, sentDate } = req.body;
        let { orderId, url, text, host, port, user, password, remotePath, fileName, txtName } = req.body.payload;
        console.log(req.body);
        database_1.default.query('call processonBase(?,?,?,?,?,?,?,?,?,?,?,?,?,@valido);', [eventId, eventName, sentDate, orderId, url, text, host, port, user, password, remotePath, fileName, txtName]).then((rows) => {
            // console.log(rows[0].length);
            res.json(rows[0]);
        });
        //res.json(games);
    }
    getOne(req, res) {
        const { codigo } = req.params;
        database_1.default.query('SELECT * FROM usuarios where numero_documento = ?', [codigo]).then((items) => {
            res.json(items[0]);
        });
        //res.json('areass:  '+ req.params.id );
    }
    create(req, res) {
        database_1.default.query('INSERT INTO usuarios set ?', [req.body]).then((rows) => {
            console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Usuarios Saved' });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('update usuarios set ? where numero_documento = ?', [req.body, codigo]);
            res.json({ message: 'The Usuarios was save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('delete from usuarios where numero_documento = ?', [codigo]).catch(err => {
                res.json({ Error: err });
            });
            res.json({ text: 'The Usuario was deleted: ' + req.params.codigo });
        });
    }
}
exports.usuariosController = new UsuariosControllers();
