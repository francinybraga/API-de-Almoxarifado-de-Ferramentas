import { Ferramenta } from '../model/Ferramenta'
import {
    cadastrarFerramentas,
    listarFerramentas,
    buscarFerramentaPorIndice,
    atualizarFerramentas,
    deletarFerramentas
} from '..ferramentaRepository.js'

export function cadastrarFerramentas(req, res) {
    const { codigo, descricao, estado } = req.body
    const cadastrodeFerramenta = new Ferramenta(codigo, descricao, estado)
    cadastrarFerramentas(cadastrodeFerramenta)
    res.status(201).json({ mensagem: 'Ferramenta cadastrado com sucesso.' })
};

export function listarFerramentas(res) {
    const listar = listarFerramentas();
    res.status(200).json(listar)
};

export function buscarFerramentaPorIndice(req, res) {
    const indice = Number(req.params.indice)
    const ferramenta = buscarFerramentaPorIndice(indice)
    if (!ferramenta) {
        return res.status(404).json({ mensagem: "Ferramenta não encontrado" })
    }
    res.status(200).json(ferramenta)
};

export function atualizarFerramentas(req, res) {
    const indice = Number(req.params.indice)
    const ferramenta = atualizarFerramentas(indice)
    if (!ferramenta) {
        return res.status(404).json({mensagem: "Ferramenta não encontrada."})
    }
    const {codigo, descricao, estado} = req.body
    if(codigo != undefined) {
        ferramenta.codigo = codigo
    }
    if(descricao != undefined) {
        ferramenta.descricao = descricao
    }
    if(estado != undefined) {
        ferramenta.estado = estado
    }
    res.status(200).json(ferramenta)
    atualizarFerramentas()
};

export function deletarFerramentas(req, res) {
    const indice = Number(req.params.indice) 
    const ferramenta = deletarFerramentas(indice) 
    if (!ferramenta) {
        return res.status(404).json({mensagem: "Ferramenta não encontrada"})
    }
    atualizarFerramentas(indice, ferramenta)
    res.status(200).json({mensagem: "Ferramenta atualizada com sucesso"})
}
