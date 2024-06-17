var $cruzeiro = "https://s.sde.globo.com/media/organizations/2021/02/13/cruzeiro_2021.svg";
var $athleticopr = "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg";
var $atleticomg = "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg";
var $atleticogo = "https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020.svg";
var $bahia = "https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg";
var $cuiaba = "https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg";
var $criciuma = "https://s.sde.globo.com/media/organizations/2024/03/28/Criciuma-2024.svg";
var $corinthians = "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg";
var $fluminense = "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg";
var $flamengo = "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg";
var $botafogo = "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg";
var $gremio = "https://s.sde.globo.com/media/organizations/2018/03/12/gremio.svg";
var $internacional = "https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg";
var $juventude = "https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg";
var $vitoria = "https://s.sde.globo.com/media/organizations/2024/04/09/escudo-vitoria-svg-69281.svg";
var $saopaulo = "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg";
var $palmeiras = "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg";
var $vasco = "https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg";
var $fortaleza = "https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg";
var $rbb = "https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg"; 
 
 
 // Exemplo de dados de jogos para rodadas
 const roundHtmls = [
    {
      roundId: 'rodada9',
      roundNumber: 9,
      games: [
        {
          homeTeam: "Red Bull Bragantino",
          awayTeam: "Juventude",
          date: "15/06/2024",
          time: "18:30",
          stadium: "Nabi Abi Chedid",
          transmissao: "Premiere",
          homeTeamLogo: $rbb,
          awayTeamLogo: $juventude
        },
        {
          homeTeam: "Fluminense",
          awayTeam: "Atlético/GO",
          date: "15/06/2024",
          time: "21:00",
          stadium: "Maracanã",
          transmissao: "SporTV / Premiere",
          homeTeamLogo: $fluminense,
          awayTeamLogo: $atleticogo
        },
        {
          homeTeam: "Athletico/pr",
          awayTeam: "Flamengo",
          date: "16/06/2024",
          time: "16:00",
          stadium: "Ligga Arena",
          transmissao: "Globo",
          homeTeamLogo: $athleticopr,
          awayTeamLogo: $flamengo
        },
         {
          homeTeam: "Corinthians",
          awayTeam: "São Paulo",
          date: "16/06/2024",
          time: "16:00",
          stadium: "Neo Quimica Arena",
          transmissao: "Globo / Premiere",
          homeTeamLogo: $corinthians,
          awayTeamLogo: $saopaulo
        },
         {
          homeTeam: "Vitória",
          awayTeam: "Internacional",
          date: "16/06/2024",
          time: "16:00",
          stadium: "Barradão",
          transmissao: "Premiere",
          homeTeamLogo: $vitoria,
          awayTeamLogo: $internacional
        },
         {
          homeTeam: "Criciúma",
          awayTeam: "Bahia",
          date: "16/06/2024",
          time: "18:30",
          stadium: "Heriberto Hülse",
          transmissao: "Premiere",
          homeTeamLogo: $criciuma,
          awayTeamLogo: $bahia
        },
         {
          homeTeam: "Cuiabá",
          awayTeam: "Fortaleza",
          date: "16/06/2024",
          time: "18:30",
          stadium: "Arena Pantanal",
          transmissao: "Premiere",
          homeTeamLogo: $cuiaba,
          awayTeamLogo: $fortaleza
        },
         {
          homeTeam: "Grêmio",
          awayTeam: "Botafogo",
          date: "16/06/2024",
          time: "18:30",
          stadium: "Kléber Andrade (ES)",
          transmissao: "Premiere",
          homeTeamLogo: $gremio,
          awayTeamLogo: $botafogo
        },
         {
          homeTeam: "Vasco",
          awayTeam: "Cruzeiro",
          date: "16/06/2024",
          time: "18:30",
          stadium: "São Januário",
          transmissao: "Premiere",
          homeTeamLogo: $vasco,
          awayTeamLogo: $cruzeiro
        },
         {
          homeTeam: "Atlético/MG",
          awayTeam: "Palmeiras",
          date: "17/06/2024",
          time: "20:30",
          stadium: "Arena MRV",
          transmissao: "SporTV / Premiere",
          homeTeamLogo: $atleticomg,
          awayTeamLogo: $palmeiras
        }
      ]
    },
    {
      roundId: 'rodada10',
      roundNumber: 10,
      games: [
       
      ]
    }
  ];

  let currentRoundIndex = 0;

  function updateRoundInfo() {
    const roundInfoDiv = document.getElementById("round-info");
    roundInfoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    const currentRound = roundHtmls[currentRoundIndex];

    // Adiciona o número da rodada
    const roundTitle = document.createElement("h3");
    roundTitle.textContent = `${currentRound.roundNumber}ª rodada`;
    roundInfoDiv.appendChild(roundTitle);

    currentRound.games.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.classList.add("game");
      gameDiv.id = currentRound.roundId;

      const homeTeamLogo = document.createElement("img");
      homeTeamLogo.classList.add("casa");
      homeTeamLogo.src = game.homeTeamLogo;

      const awayTeamLogo = document.createElement("img");
      awayTeamLogo.classList.add("fora");
      awayTeamLogo.src = game.awayTeamLogo;

      const gameInfo = document.createElement("div");

      const gameTitle = document.createElement("h3");
      gameTitle.textContent = `${game.homeTeam} x ${game.awayTeam}`;

      const gameDate = document.createElement("p");
      gameDate.textContent = `Data: ${game.date}`;

      const gameTime = document.createElement("p");
      gameTime.textContent = `Horário: ${game.time}`;

      const gameStadium = document.createElement("p");
      gameStadium.textContent = `Local: ${game.stadium}`;

      const gameTransmissao = document.createElement("p");
      gameTransmissao.textContent = `Transmissão: ${game.transmissao}`;

      gameInfo.appendChild(gameTitle);
      gameInfo.appendChild(gameDate);
      gameInfo.appendChild(gameTime);
      gameInfo.appendChild(gameStadium);
      gameInfo.appendChild(gameTransmissao);

      gameDiv.appendChild(homeTeamLogo);
      gameDiv.appendChild(awayTeamLogo);
      gameDiv.appendChild(gameInfo);

      roundInfoDiv.appendChild(gameDiv);
    });
  }

  function previousRound() {
    if (currentRoundIndex > 0) {
      currentRoundIndex--;
      updateRoundInfo();
    }
  }

  function nextRound() {
    if (currentRoundIndex < roundHtmls.length - 1) {
      currentRoundIndex++;
      updateRoundInfo();
    }
  }

  // Inicializa a exibição com a primeira rodada
  updateRoundInfo();