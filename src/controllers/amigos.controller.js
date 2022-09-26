import { getConnection } from "./../database/database";

const getFriends = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select id,nombre,telefono,facebook from amigos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const getFriend = async(req, res) => {
    try {
        console.log(req.params);
        const connection = await getConnection();
        var getting = "select id,nombre,telefono,facebook from amigos where id=" + req.params.id;
        console.log(getting);
        const result = await connection.query(getting);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const deleteFriend = async(req, res) => {
    try {
        const connection = await getConnection();
        console.info(req)
        var getting = "DELETE from amigos where id=" + req.params.id;
        console.log(getting);
        const result = await connection.query(getting);
        res.json({ message: "amigo eliminado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addFriend = async(req, res) => {
    try {
        if (req.body.nombre == undefined || req.body.telefono == undefined || req.body.facebook == undefined) {
            res.status(400).json({ message: "campos vacios" });
        } else {
            const connection = await getConnection();
            var insert = "INSERT INTO amigos (nombre,telefono,facebook) values('" + req.body.nombre + "','" + req.body.telefono + "','" + req.body.facebook + "')";
            console.log(insert);
            const result = await connection.query(insert);
            res.json({ message: "Amigo agregado correctamente" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const updateFriend = async(req, res) => {
    try {
        if (req.params.id == undefined || req.body.nombre == undefined || req.body.telefono == undefined || req.body.facebook == undefined) {
            res.status(400).json({ message: "campos vacios" });
        } else {
            const connection = await getConnection();
            var update = "UPDATE amigos SET nombre='" + req.body.nombre + "',telefono='" + req.body.telefono + "',facebook='" + req.body.facebook + "' WHERE id=" + req.params.id;
            console.log(update);
            const result = await connection.query(update);
            res.json({ message: "Amigo actualizado correctamente" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getFriends,
    addFriend,
    getFriend,
    deleteFriend,
    updateFriend
}