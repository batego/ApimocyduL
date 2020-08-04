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
let tableonBase = "onbaseregister";
class UsuariosControllers {
    list(req, res) {
        let res_db;
        let dt = new Date();
        dt.setHours(dt.getHours() + 1);
        let str = req.body.payload.remotePath;
        let index = str.lastIndexOf("/") + 1;
        let path = str.substring(0, index);
        req.body.payload.remotePath = path + dt.getHours();
        let { eventId, eventName, sentDate } = req.body;
        let { orderId, url, text, host, port, user, password, remotePath, fileName, txtName } = req.body.payload;
        // console.log(req.body.payload.remotePath);
        //antes de guardar la info setear el nombre de la carpeta con la hora actual + 1
        // poll.query('call processonBase(?,?,?,?,?,?,?,?,?,?,?,?,?,@valido);', [eventId, eventName, sentDate, orderId, url, text, host, port, user, password, remotePath, fileName, txtName]).then((rows) => {
        //     res.json(rows[0]);
        // });
        try {
            database_1.default.query('SELECT * from onbaseregister where event_id = ? ', [eventId]).then((rows) => {
                // console.log('The solution is: ', rows[0]);
                res_db = rows.length > 0 ? true : false;
                if (res_db) {
                    res.json({ message: 'Event Id Ya fue procesado' });
                }
                else {
                    // res.json({ message: 'insertado' });
                    database_1.default.query('insert into onbaseregister (event_id, send_date,order_id,url,texto,remotepath,filename,txtname) values(?,?,?,?,?,?,?,?)', [eventId, sentDate, orderId, url, text, remotePath, fileName, txtName]).then((rows) => {
                        res.json(rows);
                    });
                }
            });
        }
        catch (error) {
            res.json({ message: 'Error in catch', error });
        }
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
    // UTILS
    insertEvent(event_id, send_date, order_id, url, texto, remotepath, filename, txtname) {
        let sqlInsert = `INSERT INTO ${tableonBase}
        (event_id, send_date, order_id, url, texto, remotepath, filename, txtname)
        VALUES(
            ${event_id},
            ${send_date},
            ${order_id},
            ${url},
            ${texto},
            ${remotepath},            
            ${filename},
            ${txtname})`;
        //(env == 'DEV') ? console.log(sqlInsert): "";
        return sqlInsert;
    }
}
exports.usuariosController = new UsuariosControllers();
