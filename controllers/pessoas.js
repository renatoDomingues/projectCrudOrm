
// const model = require('../models/index')

const index = async ({ Pessoa }, req, res) => {
  // res.send('pessoas')
  // const pessoas = await model.models.pessoa.findAll()
  const pessoas = await Pessoa.findAll()
  // res.send(pessoas)
  res.render('pessoas/index', { pessoas })
}
const createForm = (req, res) => {
  res.render('pessoas/create')
}

const createProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.create(req.body)
  res.redirect('/pessoas')
}

const deleteOne = async ({ Pessoa }, req, res) => {
  await Pessoa.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}

const editForm = async ({ Pessoa }, req, res) => {
  const pessoa = await Pessoa.findById(req.params.id)
  res.render('pessoas/edit', { pessoa })
}

const editProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}

module.exports = {
  index,
  createForm,
  createProcess,
  deleteOne,
  editForm,
  editProcess
}