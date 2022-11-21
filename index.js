const curso = [
  {
    nomeCurso:"APIsRest",
    descricao:"Aprenda tudo dentro de 6 mês",
    duracao: "Meses 6",
    valor:2000
  },
  {
    nomeCurso: "JavaScript",
    descricao: "Aprenda tudo dentro de 2 mês",
    duracao: "Meses 2",
    valor: 900
  },
  {
    nomeCurso: "HTML e CSS",
    descricao: "Aprenda tudo dentro de 1 mês",
    duracao: "Meses 1",
    valor: 500
  },
];
const turma = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    terminio: "30/01/2023",
    numeroAlunos: 150,
    periodo: "noturno",
    concluida: false
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    terminio: "30/12/2022",
    numeroAlunos: 200,
    periodo: "integral",
    concluida: false
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    terminio: "15/10/2022",
    numeroAlunos: 180,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    terminio: "01/12/2022",
    numeroAlunos: 80,
    periodo: "integral",
    concluida: false
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    terminio: "04/08/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    terminio: "20/09/2022",
    numeroAlunos: 100,
    periodo: "integral",
    concluida: true
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    terminio: "12/07/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    terminio: "18/04/2023",
    numeroAlunos: 90,
    periodo: "integral",
    concluida: false
  },
];
const estudantes = [
  {
    estudante:"Jean Carlo",
    turma:"Curie",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:2,
    desconto:true,
    parcelas:200
  },
  {
    estudante:"Anabelly",
    turma:"Clarke",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:1,
    desconto:true,
    parcelas:400
  },
  {
    estudante:"Kathleen",
    turma:"Elion",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:5,
    desconto:false,
    parcelas:400
  },
  {
    estudante:"Adson",
    turma:"Sibyla",
    curso:"JavaScript",
    valor:"900",
    nParcelas:2,
    desconto:true,
    parcelas:360
  },
  {
    estudante:"Lashana Lynch",
    turma:"Zhenyi",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:1,
    desconto:true,
    parcelas:400
  },
  {
    estudante:"Halle Barry",
    turma:"Burnell",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:4,
    desconto:false,
    parcelas:500
  },
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900",
    nParcelas: 9,
    desconto: false,
    parcelas: 100
  },
];
//Função de parcelamento.
const parcelaCurso=(parcela)=>{
    let recebe=0
    let valorComDesconto=0
    if(parcela>=3&&parcela<=10){
        recebe+=curso[0].valor/parcela
        console.log(`O curso ${curso[0].nomeCurso} ficou no valor total de ${curso[0].valor}.\nEm ${parcela}x de ${recebe} reais. `)

    }else if(parcela<=2&&parcela>0){
        valorComDesconto=curso[0].valor-(curso[0].valor*0.2)
        recebe=valorComDesconto/parcela,
        console.log(`O curso ${curso[0].nomeCurso} ficou no valor total de ${valorComDesconto} em ${parcela}x de ${recebe} reais.\nFoi concedido desconto de 20% `)
    }else{
        console.log("Suas parcelas não podem ser menores que 1 nem maiores que 10")
    }

}
parcelaCurso(prompt("Coloque aqui o número de parcelas que deseja"))