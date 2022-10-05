/*****************************************************
 * Objetivo: Retornar os cursos, os alunos dos respectivos cursos e filtrar
 * a situação da matricula dos mesmos.
 * Data: 15/09/2022
 * Autor: Caroline A.
 * Versão: 1.5
 *****************************************************/

var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];
var alunos = [
     
    {       "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Aline de Almeida Campos",
            "matricula" : "20151001001",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "93",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "68",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "85",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "59",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ana Carolina Vasconcelos Barreto",
            "matricula" : "20151001002",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "52",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "54",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "ANDERSON GERÔNCIO SOUZA SILVA",
            "matricula" : "20151001004",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Aristóteles da Silva Lima",
            "matricula" : "20151001007",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2021",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "86",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "89",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Gabriella Macedo Paiva",
            "matricula" : "20151001014",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2020",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "82",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Debora Alves da Silva",
            "matricula" : "20151001012",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Heloisa Santos Araujo",
            "matricula" : "20151001017",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ingrid Paloma da Costa Porto",
            "matricula" : "20151001018",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2018",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "carga" :   "300",
                            "media" :   "20",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "50",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "HÉLIDA BENTO DE OLIVEIRA LINS",
            "matricula" : "20151001016",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "99",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "64",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Isaasc de Sousa Araújo",
            "matricula" : "20151001019",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "95",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "José Matheus da Silva Miranda",
            "matricula" : "20151001024",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "40",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "60",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "80",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        }
];
// Função que retona dados de um curso 
const nomeCursos = () => cursos

// Função que lista os alunos de cada curso
const alunosCurso = function(siglaCurso){
    let sigla = siglaCurso
    let listaAlunos = []
    let erro = true
        if(typeof(sigla) != undefined){
            if(sigla != ''){
                alunos.forEach(item =>{
                    item.curso.forEach(itemCurso => {
                        if(itemCurso.sigla.toUpperCase() == sigla.toUpperCase()){
                                listaAlunos.push({
                                    'nome':item.nome,
                                    'foto':item.foto,
                                    'matricula':item.matricula,
                                    'status':item.status,
                                    'curso': item.curso
                                })
                                erro = false              
                        }
                    })
                })
            }
        }
        
    if(erro)
        return false
    else 
        return listaAlunos
}
// Função que retorna o status do aluno
const statusAlunos = function(statusAlunos, alunosArray ){
    let arrayAlunos = alunosArray
    let status1 = statusAlunos.toLowerCase()
    let situacaoAluno = []
     erro = true
     if(typeof(status1) != undefined){
        if(status1 != ''){
                arrayAlunos.forEach(item => {
                    if(item.status.toLowerCase() ==  status1){
                        situacaoAluno.push({
                            'nome':item.nome,
                            'curso' :item.foto,
                            'matricula':item.matricula,
                        })
                       
                       erro = false
                    }
                  
                })
        }
     }
    if(erro){
        return false
    }
    else {
        return situacaoAluno
    }
    
      
}
// Função que retorna as notas de cada aluno
const disciplinasAluno = function(numeroMatricula){
    let matricula1  = numeroMatricula
    let dadosAluno = {}
    let disciplinas1 = []
    let erro = true
        if(typeof(matricula1) != undefined){
            if(matricula1 != '' && matricula1.length == 11){
                alunos.forEach(item => {
                    if(item.matricula == matricula1){
                        dadosAluno.nome = item.nome
                        dadosAluno.foto = item.foto
                        item.curso.forEach(itemDisc => {
                            itemDisc.disciplinas.forEach(itemListar => {
                                disciplinas1.push({
                                    'nome':itemListar.nome,
                                    'carga':itemListar.carga,
                                    'media':itemListar.media,
                                    'status':itemListar.status
                                })
                                erro = false
                            })
                        })
                    }
                })
            }
        }
        if(erro){
            return false
        }
        else {
            dadosAluno.disciplinas = disciplinas1
            return dadosAluno
        }
}
// Função  que retorna o aluno pelo ano de conclusão
const   anoConclusao = function(anoTermino, statusDoAluno, alunosCurso){
    let termino = anoTermino
    let cursoAluno = alunosCurso
    let status1 = statusDoAluno
    let listarAlunos = []
    let erro = true

    if(typeof(termino) != undefined){
        if(termino != '' && termino.length == 4){
            let filteredAlunos = cursoAluno.filter(({ status }) => status.toLowerCase() === status1.toLowerCase())
            filteredAlunos.filter(({ curso }) => curso.conclusao === termino)
            return filteredAlunos
        }
    }

    // if(itemAno.conclusao == termino) {
    //     listarAlunos.push({
    //         'nome':item.nome,
    //         'curso' :item.foto,
    //         'matricula':item.matricula,
    //         'sexo' :item.sexo
    //     })
    //     erro = false
    // }

    if(erro){
        return false
    }
    else {
        return listarAlunos
    }

}


module.exports = {
    nomeCursos,
    alunosCurso,
    statusAlunos,
    disciplinasAluno,
    anoConclusao
 }


    