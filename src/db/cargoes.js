let initID = 1;

function getID() {
  return initID++;
}

let cargoes = [
  {
    id: getID(),
    name: 'Cargo #' + this.id,
    project: 'Project #1',
    width: 2,
    height: 2,
    length: 10,
    weight: 50
  },
  {
    id: getID(),
    name: 'Cargo #' + this.id,
    project: 'Project #1',
    width: 1.5,
    height: 2,
    length: 8,
    weight: 38
  },
  {
    id: getID(),
    name: 'Cargo #' + this.id,
    project: 'Project #1',
    width: 10,
    height: 2,
    length: 10,
    weight: 75
  },
  {
    id: getID(),
    name: 'Cargo #' + this.id,
    project: 'Project #2',
    width: 2,
    height: 2,
    length: 2,
    weight: 12
  },
  {
    id: getID(),
    name: 'Cargo #' + this.id,
    project: 'Project #2',
    width: 5,
    height: 5,
    length: 5,
    weight: 59
  },
]