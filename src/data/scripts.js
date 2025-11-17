export const scripts = [
  [
    "gtfw",
    "greetings",
    [
      {
        title: "saudação",
        text: `
Olá, {!Contact.Name}! Que bom tê-lo(a) aqui no Suporte Técnico da inDrive. 
Meu nome é {!User.FirstName} e estou aqui para tornar sua experiência o mais 
tranquila possível. Se você ainda não compartilhou sua solicitação, por favor, 
fique à vontade para fazer isso agora. Estou pronto(a) para ajudar em qualquer 
coisa que precisar. Como posso tornar o seu dia mais fácil?
		`,
      },
      {
        title: "caro usuário, inatividade",
        text: "Prezado usuário,Estamos empenhados em resolver sua solicitação, no entanto, notamos que houve falta de interação de sua parte. Por isso, infelizmente, estamos encerrando este contato. Se sua questão ainda estiver pendente ou se precisar de assistência, por favor, não hesite em entrar em contato conosco novamente. Estamos sempre aqui para ajudar.",
      },
      {
        title: "algo mais",
        text: "Solicitação enviada, {!Contact.Name}! Posso lhe ajudar com alguma outra questão?",
      },
      {
        title: "agradecer",
        text: '"A equipe inDrive agradece o seu contato! Se precisar de mais informações ou tiver qualquer dúvida adicional, não hesite em nos contatar. Estamos sempre à disposição para atendê-lo da melhor maneira possível."',
      },
      {
        title: "encerramento Just",
        text: `A equipe inDrive agradece o seu contato ❤️ 

Para podermos prestar o melhor serviço aos nossos queridos usuários, avalie a nossa conversa (minha ajuda para você) através da das estrelas que aparecerão ao encerrar o chat.
		  
		  
5 - Excelente suporte  ⭐️⭐️⭐️⭐️⭐️
		  
4 - Suporte muito bom  ⭐️⭐️⭐️⭐️
		  
3 - Suporte aceitável  ⭐️⭐️⭐️
		  
2 - Suporte fraco: desapontado  ⭐️⭐️
		  
1 - Suporte ruim: decepcionado  ⭐️
		  
		  
Se precisar de mais informações ou tiver qualquer dúvida adicional, não hesite em nos contatar. Estamos sempre à disposição para atendê-lo da melhor maneira possível. Obrigado pelo seu tempo e feedback.`,
      },
      {
        title: "repassado",
        text: "Pedimos desculpas pelo inconveniente, {!Contact.Name}. Seu relato foi encaminhado para o setor responsável, e a partir de agora, estamos dedicados a resolver sua solicitação da melhor maneira possível.",
      },
      {
        title: 'solicitar dados',
        text: `
Olá, sr(a)

Informe os dados abaixo para localizarmos sua conta e resolvermos o quanto antes sua solicitação:

- Se caso for motorista informar número de registro CNH e RG:
- Número de CPF(sem pontos ou vírgulas):
- Número cadastrado(Com DDD):
- Data de nascimento:
- Nome completo:
`,
      },
      {
        title: 'LGPD',
        text: `
Lamento, sr(a) . Pela LGPD, (Lei Geral de Proteção de Dados), não podemos repassar informações sensíveis dos nosso usuários (Motoristas e Passageiros) sem a autorização expressa dos mesmos.
`,
      },
      {
        title: "sugestões",
        text: "Estamos empenhados em aprimorar nossa plataforma. Recebemos suas sugestões, e assim que pudermos, iremos avaliá-las cuidadosamente para implementar melhorias que beneficiem a todos. Agradecemos muito por suas considerações! Sua contribuição está sendo fundamental para tornar nossa plataforma ainda melhor.",
      },
      {
        title: 'Usuário xingando - 1a vez',
        text: `
Agradecemos pela sua atenção. É fundamental manter uma comunicação respeitosa e adequada durante nossa conversa. Por favor, evite utilizar termos inadequados ou ofensivos, pois isso pode resultar no encerramento do chat. Estamos aqui para fornecer assistência e esclarecer suas dúvidas da melhor forma possível. 

`,
      },
      {
        title: 'Usuário xingando - 2a vez',
        text: `
Diante das violações dos termos de uso e/ou comportamentos inadequados, o chat será encerrado. A inDrive agradece o contato!
`,
      },
    ],
  ],

  [
    "financial",
    "financial issues",
    [
      {
        title: "corridas não pagas (Sem dados)",
        text: `
Lamentamos que o passageiro tenha saído sem pagar!Por gentileza, envie desta forma os dados necessários: 
	
1. Data da corrida: 
2. Cidade: 
3. Nome do passageiro: 
4. Número atual com DDD: 
5. Valor total: 
6. Ponto de partida: 
7. Ponto de chegada: 
8. Autoriza passar o seu contato ao passageiro? (Sim ou não) 
				
Caro usuario, lembramos que acessando o chat através do seu histórico de corridas, todas essas informações solicitadas anteriormente irão aparecer automaticamente e assim facilitando a resolução do seu problema.`,
      },
      {
        title: "corridas não pagas (Com dados)",
        text: `
Lamentamos que o passageiro tenha saído sem pagar!
Esse tipo de atitude infringe diretamente as regras do nosso aplicativo. Precisamos da sua autorização para que possamos mediar a resolução desse problema, o Sr. autoriza que passemos o seu contato para o passageiro (Sim ou Não)?`,
      },
      {
        title: "corridas não pagas (finalização)",
        text: `
Queremos te informar, {Name}, que registramos a situação em nosso sistema! Já tomamos as medidas necessárias após receber a sua denúncia, e o passageiro foi notificado sobre o pagamento pendente. Iremos entrar em contato com o mesmo e em caso de não pagamento, a conta dele será bloqueada.

Pedimos desculpas pelo transtorno e agradecemos pela sua paciência. Se precisar de mais alguma ajuda, estaremos à disposição. Pode contar conosco!
L`,
      },
      {
        title: 'corridas não pagas - reforço',
        text: `
Nós tomaremos as providências para que você receba sim o valor do passageiro. No caso, nós entraremos em contato com o mesmo e buscaremos solicitar o pagamento. Se o mesmo se rejeitar a realizá-lo sem nenhum esclarecimento, nós efetuaremos o bloqueio do usuário. Pois não permitimos maus pagadores em nossa plataforma.
`,
      },
      {
        title: 'corridas não pagas - não reembolsamos',
        text: `
A inDriver, nestes casos, não cobre o valor do pagamento não realizado. Não somos um serviço de táxi, e sim uma plataforma online que ajuda a conectar os motoristas e os passageiros, fornecendo uma possibilidade de se encontrarem, e que no momento não tem fins lucrativos. Não realizamos transações financeiras pelo aplicativo, o pagamento sempre é feito entre os usuários.

Sendo assim, o reembolso nesse caso não é possível. No entanto, nós tomamos as providências para que você receba  o pagamento do passageiro. Entramos em contato com o mesmo e buscamos solicitar o pagamento. Se ele se recusar a pagar sem nenhum esclarecimento, nós efetuamos o bloqueio ou o banimento da plataforma, pois não permitimos passageiros maus pagadores em nossa plataforma.
`,
      },
      {
        title: "retirada de saldo",
        text: `
Por gentileza, envie desta forma os dados necessários para nosso e-mail https://indrive.com/pt/contacts/support/:

Nome completo:
RG:
Número da conta:
Agência:
Código SWIFT:
Valor do reembolso:

Envie também os 6 documentos seguintes:

1. Comprovante de residência
2. Scan do RG
3. Comprovante de pagamento
4. Scan do cartão de crédito (não mostre o seu código de verificação de cartão (CVC) impresso no verso do cartão!)
5. Baixe a declaração de reembolso e envie preenchida (DE PRÓPRIO PUNHO) e assinada (DE PRÓPRIO PUNHO), o modelo está no link:
https://www.mediafire.com/file/31hywevagy1vewo/Reembolso_Brasil_inDrive..docx/file

OBS: Quando for solicitar o reembolso, tenha em mente que seu saldo não pode ficar menor que o valor na solicitação ou haverá conflito de informação na hora do reembolso. Faça nova recarga para manter seu saldo acima do valor solicitado na declaração ou não utilize o app para não diminuir seu saldo abaixo do que deverá ser reembolsado. O prazo para reembolso é de 30 dias.
`,
      },
      {
        title: 'Código SWIFT',
        text: `
Olá, Sr(a)

O código SWIFT, também conhecido como BIC, é um código universal que permite que as contas das instituições financeiras ao redor do mundo se conectem e a transferência de valores aconteça.

Ele pode ser encontrado no seu contrato bancário, extrato ou na seção de transferências internacionais do banco. Caso não encontre, entre em contato diretamente com sua instituição financeira.
`,
      },
      {
        title: "Reembolso de comissão(Com dados)",
        text: `
Agradecemos por compartilhar isso conosco. Vou encaminhar o seu pedido de reembolso para a equipe responsável pela análise e eles irão tratar seu caso o mais rápido possível.

Gostaria de destacar que, para corridas marcadas como ""concluída"", só será possível fazer o reembolso apenas uma única vez, futuramente pedidos dessa natureza não será possível realizar uma devolução manual por questões técnicas.
		
Para pedidos de reembolsos futuros, sugerimos considerar o cancelamento da corrida utilizando a opção 'passageiro não apareceu' após 5 minutos de espera, dessa forma se o valor tiver sido debitado será reembolsado de forma automática
		
O prazo para análise do seu pedido é de até 10 dias. Pedimos a sua compreensão e paciência enquanto processamos essa solicitação. Se precisar de mais alguma informação, estamos à disposição.
`,
      },
      {
        title: "passageiro sujou",
        text: `
Lamentamos que o passageiro tenha sujado seu veículo!  Por gentileza, acesse nosso site indrive.com, vá para a aba 'Sobre nós' > 'Contato', selecione a opção 'Fale Conosco' e envie o formulário abaixo preenchido:

1. Data da corrida:
2. Cidade:
3. Seu nome:
4. Número de celular:
5. Valor da corrida:
6. Trajeto da corrida:
7. Nome do passageiro:
8. Duas fotos que comprovam a situação: uma foto do carro com a porta aberta (é preciso que sejam visível o banco sujo, a cor e o modelo do carro) e outra foto só do banco sujo junto com a CNH aberta)
`,
      },
      {
        title: "cashless",
        text: `
Agradeço por entrar em contato conosco. Informo que sua solicitação foi encaminhada ao setor financeiro para análise. Em breve entraremos em contato com uma resposta. Posso ajudar em mais alguma coisa?
`,
      },
      {
        title: "recarga de saldo",
        text: `
Para recarregar seu saldo, siga os seguintes passos: 

1. Selecione 'Minha Conta' no menu do aplicativo
2. Clique em 'Estatísticas de Saldo' 
3. Selecione 'Recarregar Saldo' 
		
A partir desse momento você terá à sua disposição as opções de recarga por meio de Cartão, Boleto e Transferência Bancária. É importante saber que o processamento do pagamento via boleto e cartão pode levar até 72 horas úteis, enquanto o PIX é automático e ocorre instantaneamente.
		
Precisa de mais alguma ajuda?
`,
      },
      {
        title: 'Pagamento Pix fora do ar',
        text: `
Olá, sr(a)

O sistema PIX está passando por uma instabilidade em todos os bancos. A orientação é que tente mais tarde, e caso já tenha realizado alguma transação, aguarde para verificar se será compensada. No meio tempo, é possível fazer o pagamento em boleto e cartão
`,
      },
      {
        title: "taxa de deslocamento",
        text: `
Pedimos desculpas pelo inconveniente, Sr. Infelizmente, as transações relacionadas às corridas são conduzidas diretamente entre passageiros e motoristas, sem que qualquer valor seja processado pelo aplicativo. 

Devido a essa natureza, não podemos realizar reembolsos desse tipo. No entanto, queremos deixar claro que não aceitamos esse comportamento. 
		
Como resultado, nosso sistema aplica automaticamente penalidades a usuários que realizam cancelamentos frequentes. Esperamos que compreenda essa política. Se precisar de mais alguma informação ou suporte, estamos à disposição.
`,
      },
      {
        title: "quilometragem diferente",
        text: `
Olá, sr

O aplicativo mostra a distância dos pedidos para viagens em linha reta, pois somente após aceita a corrida é que ele calcula a melhor rota para o local, levando em consideração o trânsito, atalhos, vias, etc.

Orientamos que realize contrapropostas nas corridas e destinos que acreditar serem viáveis.
`
      },
      {
        title: 'Aumento da comissão da inDrive',
        text: `
Olá, sr(a)

Apesar do aumento, nossas comissões ainda permanecem entre as mais baixas do mercado.
As viagens são mais lucrativas, e estas mudanças permitem que melhoremos a plataforma para os passageiros e motoristas.
Queremos atrair mais usuários, e tornar nosso serviço mais conveniente.

Queremos que sua liberdade seja maior na hora de escolher as corridas e assim você poderá aumentar ainda mais seus ganhos.
`,
      },
      {
        title: 'Aumento do preço mínimo',
        text: `
Constantemente analisamos o preço base de cada cidade cadastrada em nosso aplicativo, se necessário iremos aumentar esse valor para que o nossos usuários sejam beneficiados, diante disso pedimos que realize contra propostas nas corridas que deseja.
`
      },
      {
        title: 'pedágio - motorista',
        text: `
Em relação ao cálculo de pedágio, nosso aplicativo não realiza essa funcionalidade. No entanto, existem algumas opções que podem ser consideradas:

- Você pode combinar com o passageiro uma forma de pagamento específica para o pedágio.
- É possível dividir o valor do pedágio com o passageiro.
- modificar a rota em comum acordo para evitar o pedágio.

Essas opções permitem que você e o passageiro cheguem a um acordo sobre como lidar com os custos do pedágio. Agradecemos a compreensão e estamos à disposição para qualquer outra dúvida.
`,
      },
      {
        title: 'pedágio - passageiro',
        text: `
Valores referentes a pedágios e outras taxas devem ser combinados entre o motorista e o passageiro antes da corrida.  No final do trajeto, deve ser pago o valor combinado dentro do aplicativo. Instruímos que realize a oferta considerando tais valores. Lembre-se que não podemos impor esse tipo de cobrança aos motoristas e por isto deve ser sempre combinado.
`,
      },
    ],
  ],

  [
    "checkout",
    "checkout",
    [
      {
        title: "Verificação",
        text: `
Agradecemos por entrar em contato!
Queremos informar que nossa equipe está dedicada a revisar seus documentos. Assim que a verificação for concluída, você receberá uma notificação no aplicativo. Pedimos a gentileza de aguardar esse breve processo.`,
      },
      {
        title: "atualização de número",
        text: `
Gostaríamos de solicitar a gentileza de nos fornecer as seguintes informações para a atualização do número:

1. Seu nome completo:
2. Data de nascimento:
3. CPF:
4. CNH (para motoristas):
5. Número antigo:
6. Novo número desejado:
`,
      },
      {
        title: 'Alterar email',
        text: `
Olá, sr(a)

O e-mail só pode ser alterado pelo usuário pelo próprio aplicativo. 
Selecione o Menu > Meu perfil > Selecione sua foto > Altere o e-mail na página Configurações de perfil.
`,
      },
      {
        title: "alteração de veículo",
        text: `
Para realizar essas atualizações, basta clicar na sua foto ou nas estrelas. Em seguida, escolha a opção "Meus Veículos". Depois, clique na modalidade correspondente (Motorista Táxi ou Moto Táxi). Lá, você encontrará as opções para alterar a placa, modelo e enviar a documentação atualizada do novo veículo. Estamos à disposição para ajudar se precisar de mais alguma orientação.
`,
      },
      {
        title: "tornar-se um moto táxi",
        text: `
Caso tenha interesse em mudar para a modalidade de moto, será necessário rejeitar sua conta de entregador atual. Para efetuar essa alteração, verifique se sua CNH é definitiva e possui a inscrição EAR. Além disso, será necessário enviar uma foto do veículo com a placa visível e o certificado de registro do veículo com ano de exercício 2020 ou mais recente.

Você autoriza que rejeitemos seu cadastro de entregador para proceder com o cadastro de motorista?
`,
      },
      {
        title: 'CPF - Pendente de regularização',
        text: `
Olá, seu CPF está pendente de regularização na receita federal, dessa forma é necessário regularizar. Por favor, entre em contato através do link abaixo. 

Link para verificar na receita federal > https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp
`,
      },
      {
        title: 'CPF - Falha de validação',
        text: `
Olá, sr

No momento estamos com uma instabilidade em nosso sistema de verificação, que pode estar gerando este erro relacionado ao CPF. Nossa equipe está trabalhando para resolver esse problema. Agradecemos sua compreensão e pedimos desculpas pelo inconveniente causado. 

Estamos empenhados em normalizar o sistema para garantir a continuidade dos nossos serviços, porém não temos um prazo previsto e orientamos que retorne posteriormente.
`,
      },
      {
        title: 'Comfort - Quero ser',
        text: `
Olá, sr(a)

Para a marca/fabricante do seu carro, o seu modelo não se encaixa nos critérios que levam em conta o ano de fabricação, o modelo e a cidade. Não sendo assim possível encaixá-lo na categoria comfort.

Caso deseje, podemos sugerir a inclusão do seu carro, e encaminharei ao setor responsável para avaliação.
`,
      },
      {
        title: 'CNHD Digital',
        text: `
Lamento, sr(a) . Pela LGPD, (Lei Geral de Proteção de Dados), não podemos repassar informações sensíveis dos nosso usuários (Motoristas e Passageiros) sem a autorização expressa dos mesmos.
`,
      },
      {
        title: 'Certidão de Antecedentes',
        text: `
Olá, sr 

Por favor, adicione a certidão de antecedentes criminais dentro do prazo de validade (90 dias) que pode ser gerada gratuitamente através do link: https://servicos.pf.gov.br/epol-sinic-publico/
`,
      },
      {
        title: 'CONDUAPP',
        text: `
Olá, sr(a) 

O CONDUAPP é um certificado obrigatório que todo motorista de aplicativo da cidade de São Paulo deverá obter através de CNH com EAR, análise de antecedentes criminais e curso preparatório para poder trabalhar como motorista de aplicativo.
Para maiores informações, acesse o site: https://conduapponline.com.br/
`,
      },
      {
        title: 'CIAT - RIO DE JANEIRO',
        text: `
Olá, sr(a)

O CIAT é um documento de credenciamento dos operadores dos Serviços Públicos de Transporte e Táxi. Não está relacionado à inDrive, pois somos um serviço de transporte particular. Orientamos que busque informações no site da Prefeitura do Rio ou no Portal Carioca Digital.
`,
      },
      {
        title: 'CSVAPP',
        text: `
Olá, sr(a)

O CSVAPP, ou Certificado de Segurança do Veículo de Aplicativo, é um documento emitido emitido pelo Departamento de Transportes Públicos (DTP), órgão da Prefeitura Municipal de São Paulo e foi criado para garantir o uso de carros que se enquadrem dentro das normas e padrões aceitáveis.
Recomendamos entrar em contato com os respectivos órgãos responsáveis.      
`,
      },
      {
        title: 'ENDEC - CAMPINAS - QR Code',
        text: `
Olá, sr

Os motoristas que prestam o serviço em seu município podem gerar o QR Code no site da Emdec, na seção “Transporte por Aplicativos”. É necessário informar CPF e placa do veículo. O arquivo, que é gerado no formato PDF, deve ser impresso em papel sulfite ou adesivo e fixado no vidro dianteiro ou no painel frontal do veículo. Para abrir o arquivo, é necessário digitar os seis primeiros dígitos do CPF.
        
Qualquer problema, deve buscar a ajuda do site da Emdec.
`,
      },
      {
        title: 'ETUFOR - FORTALEZA',
        text: `
Olá, sr(a)

As vistorias dos veículos dos motoristas que atuam por meio de plataformas digitais em Fortaleza e qualquer documentação necessária em sua cidade são de responsabilidade da ETUFOR.

Para mais informações, acesse o site deles https://etuforweb.fortaleza.ce.gov.br/.
`,
      },
      {
        title: 'código municipal',
        text: `
Olá, sr(a)
Caso sua cidade seja São Paulo, pode utilizar o código 71072. Caso seja outra cidade, pode informar qualquer numeração e será corrigido posteriormente.
Após enviar a documentação para a modalidade que deseja, caso apareça alguma mensagem de erro, só aguardar a notificação em seu app informando se foi aprovado ou se precisa realizar alguma correção.
`,
      },
      {
        title: 'entregador a pé - bike',
        text: `
Olá, sr(a)

A modalidade de Entregador A pé/bike foi descontinuada em nossa plataforma. Estamos atualizando nossos termos de uso, e constantemente buscando a melhora de nossos serviços. Atualmente, na modalidade Entrega só está liberado Bike, Moto ou Carro, então caso deseje, pode solicitar verificação em uma dessas modalidades no Cadastro Online do aplicativo.
`,
      },
      {
        title: 'CNH estrangeira',
        text: `
Olá, sr(a)

No momento para realização do cadastro em nosso aplicativo só é possível aceitar a CNH nacional, permanente, e com a anotação EAR - Exerce Atividade Remunerada (para transporte de passageiros).
`,
      },
    ],
  ],

  [
    "lostfound",
    "lost and found",
    [
      {
        title: "objeto esquecido (Responsabilidade)",
        text: `
Sentimos muito pelo inconveniente, iremos entrar em contato com o motorista para que possamos localizar o seu objeto o mais rápido possível, mas gostaríamos de relembrar que os pertences dos usuários são de total responsabilidade deles, uma vez que vários passageiros utilizam os carros dos motoristas, que, por sua vez, trabalham com diversos aplicativos. 

Assim que conseguirmos entrar em contato com o mesmo, iremos lhe notificar. 
`,
      },
      {
        title: "objeto esquecido (Pedido de dados)",
        text: `
Por favor, preencha o formulário abaixo para que possamos encontrar seu objeto:

1. Nome do motorista:
2. Valor da corrida:
3. Trajeto:
4. Data e hora:
5. Você autoriza o repasse do seu número para contato?"
`,
      },
      {
        title: "objeto esquecido (finalização)",
        text: `
Sentimos muito pelo ocorrido! Não se preocupe, vamos contactar o motorista e verficar se ele encontrou o seu pertence. Assim que tivermos um retorno iremos lhe enviar uma mensagem pelo aplicativo.
`,
      },
      {
        title: "objeto encontrado",
        text: `
"Agradecemos muito por nos informar!

Por favor, preencha o formulário abaixo para que possamos oferecer a assistência necessária:
			
Nome do passageiro:
Valor da corrida:
Trajeto:
Você autoriza o repasse do seu número para contato ao passageiro? (Sim ou não)"
`,
      },
    ],
  ],

  [
    "branding",
    "branding",
    [
      {
        title: "como faço para adesivar ?",
        text: `
"Olá! Se você tiver alguma das seguintes solicitações, por favor, envie-as através do link abaixo, para que nosso departamento responsável possa tratar o caso com mais agilidade.

1. Problema com o envio de fotos.
2. Interesse em adesivar o carro.
3. Não recebeu o pagamento dos adesivos.
			
LINK: https://forms.gle/sSmxsv2RDKZfCV5K7"
			`,
      },
      {
        title: "brindes",
        text: `
O departamento encarregado da campanha está atualmente escolhendo alguns motoristas da nossa plataforma. Caso você seja um dos selecionados, receberá um contato via WhatsApp ou pelo aplicativo. Fique atento às suas mensagens!
`,
      },
      {
        title: 'incentivar',
        text: `
O incentivar é uma plataforma parceira responsável pela distribuição das bonificações de promoções que ocorrem dentro de nossa plataforma, para ter acesso a essa plataforma, é necessário acessar o seguinte link:

https://cockpit.incentivar.io/

Caso tenha dúvidas sobre como ingressar na plataforma citada, acesse o seguinte link:
https://indriver.com/mobile/page/pimi_indriver_2/ru

Quando for problema da plataforma Incentivar eles precisam abrir um chamado no site

Ou falar com eles pelo suporte no WhatsApp pelo número 551131812900
`,
      },
      {
        title: "prazo para recebimento de campanha ",
        text: `
Assim que a campanha terminar, vamos verificar se você cumpriu todos os requisitos para receber o bônus. Isso pode levar até 10 dias úteis, mas não se preocupe, pois faremos isso o mais rápido possível. Lembre-se de que a campanha só é válida para quem recebeu a comunicação da equipe inDrive.
`,
      },
      {
        title: "não recebeu (guards)",
        text: `
A distribuição dos pontos é realizada dentro do prazo estabelecido no momento do cadastro na campanha, esse prazo é necessário para verificação e validação das corridas conforme foi informado. Assim que os pontos forem liberados para resgate, avisaremos a todos os ganhadores. 
`,
      },
      {
        title: "não recebeu (indicação)",
        text: `
A distribuição dos pontos é realizada dentro do prazo estabelecido no momento do cadastro na campanha, esse prazo é necessário para verificação e validação das corridas conforme foi informado. Assim que os pontos forem liberados para resgate, avisaremos a todos os ganhadores. 
`,
      },
      {
        title: 'Quero indicar',
        text: `
Olá, sr

Nas cidades onde estão ocorrendo as ações de indicação, enviamos uma notificação para todos nossos parceiros com o link que deve ser compartilhado com o motorista indicado para que se cadastre. O senhor pode ficar offline e online novamente, que nestas cidades enviamos as notificações a cada 6 horas.

Caso não receba, a sua cidade não esteja com a campanha neste momento, pedimos que aguarde nosso retorno, pois a indicação somente é possível nestas ações.
`,
      },
      {
        title: 'acompanhar indicação',
        text: `
Olá, sr(a)

No momento não é possível acompanhar indicação. A partir do momento que o indicado cumprir os requisitos de corridas no período de trinta dias, posteriormente o setor responsável entrará em contato com quem indicou.
`,
      },
      {
        title: `Aluguel de veículos`,
        text: `
Olá, sr

No momento não oferecemos a opção de aluguel de carros. Aceitamos carros alugados das locadoras Localiza, Unidas, Movida e Milhas.
Para a verificação da documentação na análise de cadastro, o carro pode ser alugado, desde que atenda os requisitos e possua a documentação completa.
`,
      },
    ],
  ],

  [
    "invoices",
    "invoice",
    [
      {
        title: "recibos (sem new order)",
        text: `
"Infelizmente, no momento, a inDrive não emite recibos ou comprovantes. Quanto ao histórico de corridas, por enquanto, só é possível visualizar as informações disponíveis no próprio app.

Entendemos que isso pode ser um inconveniente. Se tiver mais alguma dúvida ou se precisar de alguma outra ajuda, estamos à disposição."
`,
      },
      {
        title: "recibos (com new order)",
        text: `
Se você ainda tiver a corrida em seu histórico, basta clicar na corrida desejada e, em seguida, no botão “Receber um recibo”. O recibo estará disponível para você. No entanto, se a corrida for muito antiga ou não estiver mais em seu histórico, infelizmente, não será possível gerar o recibo.
`,
      },
      {
        title: 'Recibos (Incidentes)',
        text: `
Olá, sr

Por se tratar de uma plataforma que conecta motoristas a possíveis clientes sem intermédio algum no pagamento e não um serviço de taxi como outros, é impossível para a plataforma emitir recibos ou comprovantes, desculpe.
        
Caso você precise de ajuda judicial, será necessário solicitar por meio de um ofício. 
        
Peça para que o investigador ou delegado responsável pelo seu caso envie um ofício devidamente carimbado e assinado, solicitando o documento em questão e todos os outros dados que forem necessários para investigação. 
        
Esse ofício deve ser enviado pelo responsável legal do caso, para a nossa central de suporte através do e-mail support@indrive.com
        
Juntamente à esta solicitação, você deve enviar uma selfie com a CNH, seja ela física ou digital.        
`,
      },
    ],
  ],

  [
    "incidents",
    "blocking - incidents",
    [
      {
        title: "ligação da qualidade",
        text: `
"Agradecemos por sua compreensão. Nosso time entrará em contato durante o horário comercial para cuidar de tudo relacionado ao seu ocorrido. A ligação será realizado do DDD 11 ou 21, então, por favor, esteja atento e não recuse as chamadas nas próximas 24 horas.

Se precisar de mais alguma ajuda ou tiver alguma dúvida, estamos aqui para você."
`,
      },
      {
        title: 'Bloqueio Moderação',
        text: `
Lamento pelo ocorrido, mas não será possível realizar o desbloqueio de sua conta de forma manual, pois verificamos em suas solicitações de serviços, pedidos com comentários proibidos, devido a esse fator é necessário aguardar o prazo de desbloqueio que está sendo informado na tela de seu aplicativo.
`,
      },
      {
        title: 'Bloqueio - Definitivo',
        text: `
Lamentamos por qualquer ocorrido passado em nossa plataforma, mas o desbloqueio de sua conta não será possível, pois os termos e condições do aplicativo foram infringidos, através de mensagens, conversas com motorista/passageiro ou solicitações de corridas proibidas. Devido a essa sequência de fatores mencionados, o desbloqueio se torna irreversível.
`,
      },
      {
        title: 'Bloqueio - Baixa avaliação',
        text: `
Olá, sr

Sua conta foi bloqueada por baixas avaliações.
O sistema aplica bloqueios automáticos quando motoristas ou passageiros atingem uma média de avaliação considerada muito baixa.
Isto é regido por um conjunto de fatores, como reclamações e cancelamentos, além das avaliações dadas pelos usuários.
Este tipo de bloqueio não pode ser revertido.

 Sentimos muito pelo ocorrido.
`,
      },
      {
        title: 'Bloqueio - Emprestar conta',
        text: `
Olá, sr.  

 Foi detectado que seu perfil no aplicativo, foi repassado ou emprestado em algum momento para terceiros, e esse tipo de conduta  não está de acordo com as diretrizes de nosso app, pois fere diretamente a segurança dos usuários e por este motivo sua conta sofreu uma penalização. Informamos que seu perfil é pessoal e intransferível. O seu bloqueio foi realizado por um prazo limitado, basta aguardar o período de desbloqueio normal ( você pode ver o prazo no próprio app ). Orientamos que não repita o mesmo comportamento, para evitar o mesmo transtorno novamente.
`,
      },
      {
        title: 'Violações Masters',
        text: `
Olá! Informamos que é contra as regras da InDrive disponiblizar informações pessoais, tais como: telefone, email, etc... na descrição do pedido. Por favor, faça o pedido novamente. Agradecemos a compreensão!
`,
      },
      {
        title: 'Bloqueio - Chargeback',
        text: `
Olá, sr(a)

Sua conta foi bloqueada definitivamente.
Foi identificado diversas solicitações de estorno do valor do saldo após a recarga. Não sendo a primeira vez que ocorreu, então o bloqueio definitivo foi aplicado pelo sistema. 
Este tipo de bloqueio não pode ser revertido.
Sentimos muito pelo ocorrido.
`,
      },
      {
        title: 'autobots - informações',
        text: `
Olá, Sr(a)

Informamos que estamos cientes de que alguns usuários estão utilizando aplicativos de terceiros em conjunto com o nosso serviço. Entretanto, gostaríamos de salientar que recomendamos evitar o uso dessas ferramentas para garantir a segurança e estabilidade da sua conta. Além disso, essa medida contribui para evitar qualquer impacto negativo no funcionamento geral do nosso serviço. Agradecemos a compreensão e estamos à disposição para esclarecer quaisquer dúvidas adicionais.
`,
      },{
        title: 'autobots - denúncia',
        text: `
Olá, Sr(a)

Informamos que estamos cientes de que alguns usuários estão utilizando aplicativos de terceiros em conjunto com o nosso serviço. Entretanto, gostaríamos de salientar que recomendamos evitar o uso dessas ferramentas para garantir a segurança e estabilidade da sua conta. Além disso, essa medida contribui para evitar qualquer impacto negativo no funcionamento geral do nosso serviço. Agradecemos a compreensão e estamos à disposição para esclarecer quaisquer dúvidas adicionais.
`,
      },
    ],
  ],

  [
    "others",
    "others",
    [
      {
        title: 'Instabilidade geral',
        text: `
Olá, Sr.

Lamentamos por essa situação.
No momento estamos enfrentando uma instabilidade em nossa plataforma, pedimos desculpas pelo inconveniente. Nosso time técnico está trabalhando para resolver o problema.
Em breve será normalizado.
`,
      },
      {
        title: 'Aviso sonoro',
        text: `
Olá, sr(a)

Acesse a chave inglesa no canto superior direito do aplicativo e ative a opção "Aviso Sonoro" para receber notificações de corridas. Lembre-se de também gerenciar as permissões de notificações para o aplicativo da inDrive nas configurações do seu celular.
`,
      },
      {
        title: 'Aviso sonoro - New Order',
        text: `
Olá, sr

Acesse o menu no lado esquerdo superior, clique em configurações e vá em "Aviso sonoro" para receber notificações de corridas. Lembre-se de também gerenciar as permissões de notificações para o aplicativo da inDrive nas configurações do seu celular.
`,
      },
      {
        title: "experiência ruim na corrida",
        text: `
"Pedimos desculpas pelo transtorno passado em nosso aplicativo. Estamos aqui para ajudar e gostaríamos de ouvir mais sobre o ocorrido. Poderia compartilhar conosco um breve relato do acontecido?

Queremos entender melhor para resolver o conflito o mais rápido possível e garantir que sua experiência conosco seja a melhor."
`,
      },
      {
        title: 'baixa avaliação',
        text: `
Entendemos que alguns maus usuários podem eventualmente usar de má fé ao fazer avaliações e outros usuários inexperientes também podem não avaliar a quantidade de estrelas correta.
Mas nós não podemos fazer modificações nas avaliações, uma vez que elas são sempre algo subjetivo e não temos controle sobre isso. Podemos apenas remover comentários ofensivos, pois não compactuamos com este tipo de atitude..
Pedimos que tenha paciência com qualquer mau usuário, lembre-se que, assim como você, todos estão sujeitos ao mesmo tipo de inconveniente.
Estamos tentando a cada dia melhorar nossa base de usuários, sempre bloqueando aqueles que fazem mau uso do app, justamente para que estas situações ocorram cada vez menos.
`,
      },
      {
        title: "excluir a conta",
        text: `
Lamentamos saber que você está desejando excluir sua conta. Queremos entender melhor o motivo da sua decisão. Existe algo em que eu possa ajudar ou alguma sugestão para podermos reverter essa situação ?
`,
      },
      {
        title: "excluir a conta (finalização)",
        text: `
Lamentamos sinceramente que você tenha decidido se desligar de nossa plataforma. Fizemos o cancelamento de sua conta conforme o solicitado. Entendemos que no momento não se trata de uma opção viável para você. De toda maneira, somos totalmente gratos pela sua presença durante o tempo que esteve conosco, mas desejamos fortemente que você possa voltar o quanto antes!
`,
      },
      {
        title: "cancelamentos frequentes",
        text: `
"Pedimos desculpas pelo inconveniente, Sr. Nosso sistema tem uma configuração automática para proteger a experiência de todos os usuários. 

Entendemos que às vezes é necessário cancelar corridas. Sugerimos que, ao aceitar corridas, escolha aquelas com as quais se sinta mais confortável. 
			
Se, por algum motivo, precisar cancelar, recomendamos selecionar a opção ""Passageiro não apareceu"" para evitar penalizações. A sua experiência é importante para nós, e estamos aqui para ajudar em qualquer dúvida."
`,
      },
      {
        title: "dados da corrida",
        text: `
"Lamentamos qualquer transtorno passado em nossa plataforma. Por favor, para que possamos solucionar o seu problema, poderia nos fornecer os dados da sua corrida:

1. Horário.
2. Data.
3. Nome do motorista.
4. Valor ou caso preferir nos encaminhar um print da solicitação. "
`,
      },
      {
        title: 'Novo Sistema de classificação',
        text: `
Olá, sr

Novo sistema de classificação:
        
O inDriver mudou para um novo sistema de classificação.
        
Dependendo do feedback dos passageiros e do histórico de solicitações de viagens no serviço, os motoristas recebem um dos cinco níveis de classificação:
- Muito alto
- Alto
- Médio
- Abaixo da média
- Baixo
        
No novo sistema, reduzimos o impacto de taxas negativas aleatórias. O nível de classificação pode ser aumentado ou diminuído ao receber novas solicitações. Quando a classificação cai para o nível "Baixo", o motorista é automaticamente bloqueado no sistema sem o direito de restaurar.
        
Motoristas de alta classificação recebem mais notificações sobre novos pedidos.
`,
      },
      {
        title: 'Apólice do seguro',
        text: `
Olá, sr 

As informações da apólice de seguro estão disponíveis diretamente no app. Para ter acesso às informações siga os seguintes passos: 

1. Abra o aplicativo;
2. Clique nas 3 (três) barras do canto superior à esquerda;
3. No Menu clique em Menu > Ajuda > Cidade > Segurança e Verificação e após clique em Seguros.


Seguimos à disposição em caso de dúvidas.
`,
      },
      {
        title: "Solicitação - cartão crédito/débito inDrive",
        text: `
Olá! Agradecemos muito por solicitar o nosso cartão de crédito ou débito. Estamos animados com o seu interesse em nossos produtos financeiros! Assim que o produto estiver pronto para ser entregue na sua cidade, entraremos em contato para que você possa recebê-lo. Muito obrigado pela confiança em nossa empresa!
`,
      },
    ],
  ],
];
