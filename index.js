const curso = [
  {
    nomeCurso: "APIsRest",
    descricao: "Aprenda tudo dentro de 6 mês",
    duracao: "Meses 6",
    valor: 2000,
  },
  {
    nomeCurso: "JavaScript",
    descricao: "Aprenda tudo dentro de 2 mês",
    duracao: "Meses 2",
    valor: 900,
  },
  {
    nomeCurso: "HTML e CSS",
    descricao: "Aprenda tudo dentro de 1 mês",
    duracao: "Meses 1",
    valor: 500,
  },
];

////////////////////////////////////////////////////
const arrayTurma = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    terminio: "30/01/2023",
    numeroAlunos: 150,
    periodo: "noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    terminio: "30/12/2022",
    numeroAlunos: 200,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    terminio: "15/10/2022",
    numeroAlunos: 180,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    terminio: "01/12/2022",
    numeroAlunos: 80,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    terminio: "04/08/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    terminio: "20/09/2022",
    numeroAlunos: 100,
    periodo: "integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    terminio: "12/07/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    terminio: "18/04/2023",
    numeroAlunos: 90,
    periodo: "integral",
    concluida: false,
  },
];
/////////////////////////////////////////////////////
const arrayEstudantes = [
  {
    estudante: "Jean Carlo",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: "500",
    nParcelas: 2,
    desconto: true,
    valorParcela: 200,
  },
  {
    estudante: "Anabelly",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: "500",
    nParcelas: 1,
    desconto: true,
    valorParcela: 400,
  },
  {
    estudante: "Kathleen",
    turma: "Elion",
    curso: "APIsRest",
    valor: "2000",
    nParcelas: 5,
    desconto: false,
    valorParcela: 400,
  },
  {
    estudante: "Adson",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: "900",
    nParcelas: 2,
    desconto: true,
    valorParcela: 360,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500",
    nParcelas: 1,
    desconto: true,
    valorParcela: 400,
  },
  {
    estudante: "Halle Barry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000",
    nParcelas: 4,
    desconto: false,
    valorParcela: 500,
  },
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900",
    nParcelas: 9,
    desconto: false,
    valorParcela: 100,
  },
];

///Função de parcelamento.////////////////////////////

const carrinhoCursos = [500, 500, 1000];

const adcCarrinho = (nomeDoCurso) => {
  const curso = buscarCurso(nomeDoCurso);
  carrinhoCursos.push(curso.valor);
  console.log(carrinhoCursos);
  return carrinhoCursos;
};

const parcelarCurso = (carrinhoCursos, parcela) => {
  let valorTotal = 0;
  let valorPorParcela = 0;
  let desconto = 0;

  if (carrinhoCursos.length > 1) {
    switch (carrinhoCursos.length) {
      case 3:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.1;
        break;

      default:
        desconto = 0;
        break;
    }
    for (let valor of carrinhoCursos) {
      valorTotal += valor;
    }

    valorTotal = valorTotal - valorTotal * desconto;
  } else {
    valorTotal = carrinhoCursos[0];
  }

  if (parcela <= 2) {
    valorTotal = valorTotal - valorTotal * 0.2;
    valorPorParcela = valorTotal / parcela;
    let msg = `O valor do pagamento é de  ${valorTotal} com 20% de desconto, parcelado em ${parcela}x de R$ ${valorPorParcela}.`;
    return msg;
  } else if (parcela >= 3 && parcela <= 10) {
    valorTotal = valorTotal;
    valorPorParcela = valorTotal / parcela;
    msg = `O valor do pagamento é de ${valorTotal},parcelado em ${parcela}x de R$ ${valorPorParcela}. `;
    return msg;
  } else {
    msg = `Desculpa! Não trabalhamos acima de 10 parcelas \n Por favor! Escolha um número de parcelas entre 1 e 10.`;
    return msg;
  }
};

console.log(parcelarCurso(carrinhoCursos, 11));

///Função para buscar cursos////////////////////////
const buscarCurso = (procurarCurso) => {
  let resultado;
  for (let cadaCurso of curso) {
    if (cadaCurso.nomeCurso === procurarCurso) {
      resultado = cadaCurso;
      return resultado;
    } else {
      return `opção invalida ou curso não existente, ${procurarCurso}`;
    }
  }
};
buscarCurso();

/// Função para buscar turma //////////////////
const buscarTurma = (procurarTurma) => {
  let resultado = {};
  for (let cadaTurma of arrayTurma) {
    if (cadaTurma.turma === procurarTurma) {
      resultado = cadaTurma;
      return resultado;
    }
  }
};
buscarTurma("Hipátia");

/// Função para buscar estudante /////////////////
const buscarEstudante = (procurarEstudante) => {
  let resultado;
  for (let cadaAluno of arrayEstudantes) {
    if (cadaAluno.estudante === procurarEstudante) {
      resultado = cadaAluno;
      return resultado;
    }
  }
};

/// Função matricular /////////////
const matricular = (nome, curso, turma, numParcelas) => {
  let valorCurso = buscarCurso(curso.valor);
  let valorTotal = 0;
  let valorPorParcela = 0;
  let desconto = false;

  if (numParcelas > 0 && numParcelas <= 2) {
    desconto = true;
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorPorParcela = valorTotal / numParcelas;
  } else {
    valorTotal = valorCurso.valor;
    valorPorParcela = valorTotal / numParcelas;
  }

  let novoAlun = {
    estudante: nome,
    turma: turma,
    curso: curso,
    valor: valorCurso.valor,
    nParcelas: numParcelas,
    desconto: desconto,
    valorParcela: valorPorParcela,
  };

  arrayEstudantes.push(novoAlun);

  console.log(arrayEstudantes);
  a;
  return `Aluno matriculado \n Nome:${nome} \n Curso:${curso} \n Turma: ${turma}`;
};
