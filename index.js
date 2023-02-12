const curso = [
  {
    nomeCurso: "APIs e Rest",
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

let carrinhoCursos = [];

const adcCarrinho = (procuraCurso) => {
  procuraCurso = document.getElementById("cursoI").value;
  const valorCurso = buscarCurso(procuraCurso);
  console.log(valorCurso);

  document.getElementById("cursoI").value = ``;
  console.log(carrinhoCursos);
  return carrinhoCursos.push(valorCurso.valor);
};

const parcelarCurso = () => {
  let parcela = document.getElementById("numeroParcelaF").value;
  document.getElementById("imputFormsF").innerHTML = ``;
  let msg = document.getElementById("imputFormsF");

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

  if (Number(parcela) <= 2) {
    valorTotal = valorTotal - valorTotal * 0.2;
    valorPorParcela = valorTotal / Number(parcela);

    document.getElementById("numeroParcelaF").value = ``;

    return (msg.innerHTML = `<h2 id="h2Valor"><strong>Valor</strong></h2>
    <p> O valor do pagamento é de  ${valorTotal} com 20% de desconto, parcelado em ${Number(
      parcela
    )}x de R$ ${valorPorParcela}.</P>`);
  } else if (Number(parcela) >= 3 && Number(parcela) <= 10) {
    valorTotal = valorTotal;
    valorPorParcela = valorTotal / Number(parcela);

    document.getElementById("numeroParcelaF").value = ``;

    return (msg.innerHTML = `<h2 id="h2Valor"><strong>Valor</strong></h2>
    <P> O valor do pagamento é de ${valorTotal},parcelado em ${Number(
      parcela
    )}x de R$ ${valorPorParcela}.</p> `);
  } else {
    document.getElementById("numeroParcelaF").value = ``;
    return (msg.innerHTML = `<h2 id="h2Valor"><strong>Valor</strong></h2>
      <p>Desculpa! Não trabalhamos acima de 10 parcelas \n Por favor! Escolha um número de parcelas entre 1 e 10.</p>`);
  }
};

/// Função para buscar turma //////////////////

const buscarTurma = (input) => {
  input = document.getElementById("msgArea").value;
  let exibirTurma = document.getElementById("exibirTurma");
  exibirTurma.innerHTML = "";
  arrayTurma.filter((cadaTurma) => {
    if (cadaTurma.turma.toLocaleLowerCase().includes(input.toLowerCase())) {
      let turmaconCluida =
        cadaTurma.concluida === true ? (condicao = `sim`) : (condicao = "não");
      exibirTurma.innerHTML += `<section id="cardsTurmas">
      <section id="titulo">
      <h3>${cadaTurma.turma}</h3>
      </section>
      <section class="inforTurma">
      <p><strong>Curso:</strong>${cadaTurma.curso}</p>
      <p><strong>Início:</strong>${cadaTurma.inicio}</p>
      <p><strong>Término:</strong>${cadaTurma.terminio}</p>
      <p><strong>Alunos:</strong>${cadaTurma.numeroAlunos}</p>
      <p><strong>Período</strong>:${cadaTurma.periodo}</p>
      <p><strong>Concluído:</strong>${turmaconCluida}</p>
      </section>
      </section>`;
      document.getElementById("msgArea").value = ``;
      return cadaTurma;
    }
  });
};

/// Função para buscar estudante /////////////////
const buscarEstudante = (procurarEstudante) => {
  document.getElementById("msgRetornadaF").innerHTML=``;
  procurarEstudante = document.getElementById("alunoF").value;
  let msg = document.getElementById("msgRetornadaF");
  let resultado = {};
  for (let cadaAluno of arrayEstudantes) {
    if (
      cadaAluno.estudante.toLocaleLowerCase() ===
      procurarEstudante.toLocaleLowerCase()
    ) {
      resultado = cadaAluno;
      resultado.desconto === true
        ? (resultado.desconto = `sim`)
        : (resultado.desconto = `não`);
      document.getElementById("alunoF").value = ``;
      console.log(resultado);
      return (msg.innerHTML += `<p><strong>Aluno:</strong>${resultado.estudante}</p>
      <p><strong>Turma:</strong>${resultado.turma}</p>
      <p><strong>Curso:</strong>${resultado.curso}</p>
      <p><strong>Valor total:</strong>${resultado.valor}</p>
      <p><strong>Valor parcela:</strong>${resultado.valorParcela}</p>
      <p><strong>N.° parcela:</strong>${resultado.nParcelas}</p>`);
    }
  }
};

///Função para buscar cursos////////////////////////
const buscarCurso = (procuraCurso) => {
  procuraCurso = document.getElementById("cursoI").value;
  procuraCurso.innerHTML = ``;
  for (cadaCurso of curso) {
    if (cadaCurso.nomeCurso.toLowerCase() === procuraCurso.toLowerCase()) {
      return cadaCurso;
    }
  }
};

/// Função matricular /////////////

const matricularAluno = (nome, procuraCurso, turma, numParcelas) => {
  nome = document.getElementById("nomeI").value;
  turma = document.getElementById("turmaI").value;
  numParcelas = Number(document.getElementById("parcelaI").value);
  let exibir = document.getElementById("msgAlunoMatriculado");
  let valorCurso = buscarCurso(procuraCurso);

  let valorTotal = 0;
  let valorPorParcela = 0;
  let desconto = `não`;

  if (numParcelas > 0 && numParcelas <= 2) {
    desconto = `sim`;
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorPorParcela = valorTotal / numParcelas;

    let novoAlun = {
      estudante: nome,
      turma: turma,
      curso: valorCurso.nomeCurso,
      valor: valorCurso.valor,
      nParcelas: numParcelas,
      desconto: desconto,
      valorParcela: valorPorParcela,
    };
    exibir.innerHTML += `<section class="sectionMatricula">
    <h2 class="subTitulo"><strong>Aluno matriculado</strong></h2>
    <img id="imgYes" src="./img/Yes.png" alt="imagem" />
  </section>
  <section id="msgRetornada">
   <p>Aluno Matriculado</p>
   <p>Nome:${nome}</P>
   <p>Curso:${valorCurso.nomeCurso}</P>
   <p>Turma:${turma}</p>
  </section>`;
    document.getElementById("nomeI").value = ``;
    document.getElementById("turmaI").value = ``;
    document.getElementById("parcelaI").value = ``;
    document.getElementById("cursoI").value = ``;

    return arrayEstudantes.push(novoAlun);
  } else {
    valorTotal = valorCurso.valor;
    valorPorParcela = valorTotal / numParcelas;

    let novoAlun = {
      estudante: nome,
      turma: turma,
      curso: valorCurso.nomeCurso,
      valor: valorCurso.valor,
      nParcelas: numParcelas,
      desconto: desconto,
      valorParcela: valorPorParcela,
    };

    exibir.innerHTML += `<section class="sectionMatricula">
    <h2 class="subTitulo"><strong>Aluno matriculado</strong></h2>
    <img id="imgYes" src="./img/Yes.png" alt="imagem" />
  </section>
  <section id="msgRetornada">
   <p>Aluno Matriculado</p>
   <p>Nome:${nome}</P>
   <p>Curso:${valorCurso.nomeCurso}</P>
   <p>Turma:${turma}</p>
  </section>`;
    document.getElementById("nomeI").value = ``;
    document.getElementById("turmaI").value = ``;
    document.getElementById("parcelaI").value = ``;
    document.getElementById("cursoI").value = ``;
    console.log(arrayEstudantes);
    return arrayEstudantes.push(novoAlun);
  }
};
