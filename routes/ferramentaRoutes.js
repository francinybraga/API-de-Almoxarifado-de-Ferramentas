import express from "express"
import {
    cadastrarFerramentas,
    listarFerramentas,
    buscarFerramentaPorIndice,
    atualizarFerramentas,
    deletarFerramentas
} from "../controller/ferramentaController.js"

const router = express.Router()
router.post("/", cadastrarFerramentas)
router.get("/", listarFerramentas)
router.get("/:indice", buscarFerramentaPorIndice)
router.patch("/:indice", atualizarFerramentas)
router.delete("/:indice", deletarFerramentas)
export default router