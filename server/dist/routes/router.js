"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        msj: 'Todo esta bn'
    });
});
exports.router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        msj: cuerpo + ' ' + de
    });
});
exports.router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        msj: cuerpo + ' ' + de,
        id
    });
});
