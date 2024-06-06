/*3) Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. A Torre começa com estrutura em 100 e o usuário pode destruir ou construir, digitando valores nos campos e clicando nos botões de menos e mais. O valor de estrutura deve ser atualizado após destruir ou construir.

A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída".*/

let vidaTorre = 100;

    function ConstroiTorre() {
        let valorConstruir = Number(document.getElementById("inptConstroi").value);
        vidaTorre += valorConstruir;
        document.getElementById("inptEstrutura").value = vidaTorre;

        if (vidaTorre >= 0) {
            document.getElementById("inptSituacao").value = 'Ativa';
        }

        document.getElementById("inptConstroi").value = '';
    }

    function DestroiTorre() {
        let valorDestruir = Number(document.getElementById("inptDestroi").value);
        vidaTorre -= valorDestruir;
        document.getElementById("inptEstrutura").value = vidaTorre;

        if (vidaTorre <= 0) {
            document.getElementById("inptSituacao").value = 'Destruída';
        }

        document.getElementById("inptDestroi").value = '';
    }
    function Reiniciar(){
        
    }
