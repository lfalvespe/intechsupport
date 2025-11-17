import styles from './TagsTable.module.css'

const TagsTable = () => {
    return (

        <div className={styles.TagsTable}>

            <table>


                <thead>
                    <tr>
                        <th className={styles.tableTitle} colSpan={6}>New Tags</th>
                    </tr>
                </thead>


                <tbody>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>
                            account
                        </th>
                    </tr>

                    <tr>
                        
                        {/* <th className={styles.category}>Category</th> */}

                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={5} className={styles.category}>
                         account
                     </td> */}
                        <td className={styles.reasons}>
                            balance
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>balance questions </li>
                                <li>balance issues</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>reasons details (pt)</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>informações gerais sobre o saldo da conta: </li>
                                <li>qual é o meu saldo? </li>
                                <li>transações</li>
                                <li>eu tinha X no meu saldo, agora tenho Y, por quê?</li>
                                <li>por que meu saldo está negativo?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Replenishment
                        </td>
                        <td className={styles.reasonDetails}>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>
                                    Problemas do aplicativo (botão desapareceu)
                                </li>
                                <li>
                                    Problemas do provedor (lentidão, codigos não chegam, etc)
                                </li>
                                <li>
                                    Causa do problema indefinido (adicionado fundos ao saldo, mas valor não foi debitado)
                                </li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Erro ao reabastecer a conta. </li>
                                <li>Adicionar botão de fundos ausente. </li>
                                <li>Código de pagamento não aparece</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Refund
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Service fee refund</li>
                                <li>Withdraw</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Reembolso do pagamento do serviço </li>
                                <li>Reembolso de saldo da conta</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Solicitar reembolso de pedido incompleto</li>
                                <li>Descontar a comissão depois de atingir o ponto B</li>
                                <li>
                                    Alta comissão foi descontada porque o cliente especificou um preço errado
                                </li>
                                <li>
                                    Por que a comissão foi descontada, embora o pedido não tenha sido concluído
                                </li>
                                <li>
                                    A comissão foi descontada da minha conta e não fiz a viagem
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Invoice request
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>History request </li>
                                <li>About the order</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Pedido do histórico </li>
                                <li>Sobre os pedidos</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Todas as consultas sobre os ganhos por um determinado período de tempo
                                </li>
                                <li>Quanto foi cobrado por um pedido (cliente)</li>
                                <li>Histórico de ganhos (executor)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            Bonus Ride Hailing
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>RH bonus questions</li>
                                <li>RH bonus issue</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Perguntas referentes a bônus de corridas</li>
                                <li>Problemas nos bônus das corridas</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Não recebi bônus</li>
                                <li>Vida útil do bônus encerrada</li>
                                <li>O valor do bônus não corresponde ao declarado</li>
                                <li>Como são descontados os bônus? </li>
                                <li>Quantos bônus eu tenho?</li>
                                <li>Por que não recebi bônus?</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>application</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={6} className={styles.category}>application</td> */}
                        <td className={styles.reasons}>
                            App bug
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Outage </li>
                                <li>Freezes</li>
                                <li>Errors</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Interrupções </li>
                                <li>Lentidão</li>
                                <li>Erros</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    plicativo demora/Aplicativo não funciona/Aplicativo inoperante
                                </li>
                                <li> O aplicativo congelou</li>
                                <li>Apareceu um erro no aplicativo</li>
                                <li>Tela verde, app travado </li>
                                <li>Feed de pedidos não carregando</li>
                                <li>Não consigo sair de uma seção</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Function works incorrectly
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Critical Impact </li>
                                <li>Non-critical Impact</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Impacto critico </li>
                                <li>Impacto não crítico</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Funcionamento incorreto de determinada funcionalidade no app (VOIP, chat, autobid, botão, seção do app)
                                </li>
                                <li>
                                    Opção de checar notificações para intermunicipais não está funcionando
                                </li>
                                <li>
                                    Não consigo ouvir o sino de notificação quando recebo uma notificação
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Tutorial
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>App How to</li>
                                <li>About the service </li>
                                <li>Info actualization</li>
                            </ul >
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Como usar o app </li>
                                <li>Sobre o serviço </li>
                                <li>Atualização sobre informações</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li > Todas as perguntas e consultas elementares sobre o aplicativo </li>
                                <li>Como aceitar uma ordem (executor) </li>
                                <li>Como criar um pedido (cliente) </li>
                                <li>Como passar na verificação de documentos </li>
                                <li>Como trocar de veículo </li>
                                <li>Como mudar de número </li>
                                <li>Como recarregar meu saldo </li>
                                <li>Como mudar (verticais)? </li>
                                <li>Como funciona o aplicativo? </li>
                                <li>Onde o inDrive opera? </li>
                                <li>Em que país/cidade você opera?</li>
                                <li>Quando o aplicativo vai operar na cidade X?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Third-party apps
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Autoclickers\Bots</li>
                                <li>Fake-GPS</li>
                                <li>VPN\Proxy</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Autoclickers\Bots</li>
                                <li>Fake-GPS</li>
                                <li>VPN\Proxy</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Reclamações sobre outros usuários usando terceiros aplicativos (autokillers, fake GPS...)
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            System Maintenance                    </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Shrink</li>
                                <li>Tech.works</li>
                                <li>System maps changing"</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Apagão dos dados</li>
                                <li>Problemas técnicos</li>
                                <li>Substituição do sistema de localização"</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Apagão dos dados</li>
                                <li>Lançamento posterior</li>
                                <li>Mudança de mapas do sistema</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className={styles.reasons}>
                            No order
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Few orders in user's area</li>
                                <li>Tech issue on user's side</li>
                                <li>Tech issue on Application side</li>
                                <li>Cann't use the app</li>
                                <li>The driver's account isn't verified</li>
                                <li>App doesn't work in the city</li>
                                <li>No available executor</li>
                                <li>Autobid</li>
                                <li>The driver's account isn't verified</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Poucos pedidos na área do usuário</li>
                                <li>Problema técnico do lado do usuário</li>
                                <li>Problema técnico no lado do aplicativo</li>
                                <li>Não posso usar o aplicativo</li>
                                <li>A conta do motorista não é verificada</li>
                                <li>App não funciona na cidade</li>
                                <li>Não há Executor disponível</li>
                                <li>Cobrança Automática</li>
                                <li>O motorista não é verificado</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Sem ordens</li>
                                <li>Nenhuma resposta dos motoristas</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>branding</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={2} className={styles.category}>branding</td> */}
                        <td className={styles.reasons}>
                            Request for branding
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>About branding</li>
                                <li>Branding issues</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Referente a adesivagem</li>
                                <li>Problemas com adesivagem</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Como participar na campanha de adesivagem</li>
                                <li>Por que você não tem campanhas no país/cidade X?</li>
                                <li>Como posso colocar sticker no meu veículo?</li>
                                <li>Existe campanha na minha cidade?"</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td >2</td>
                        <td className={styles.reasons}>
                            Didn't receive bonus                    </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <li>
                                Não recebi bônus por adesivagem (não confunda com Conta{`>`}Bônus)
                            </li>
                            <li>Alta carga sobre os especialistas em adição de bônus.</li>
                            <li>
                                Falta de informações fornecidas sobre adição de bônus de marca
                            </li>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>comfort status & ac</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={3} className={styles.category}>comfort status & ac</td> */}
                        <td className={styles.reasons}>
                            Consultation
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>About Comfort status</li>
                                <li>Vehicle requirements</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Referente ao status de comfort</li>
                                <li>Requerimentos do veículo</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Como obter o status de conforto</li>
                                <li>Por que meu status de conforto não aparece</li>
                                <li>O que é conforto</li>
                                <li>Quais são as vantagens do status de conforto</li>
                                <li>O que significa a bandeira azul?</li>
                                <li>Requisitos do veículo para status de conforto</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Vehicle condition                    </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <li>
                                Reclamação de mau estado do veículo no modo de conforto (passageiro)
                            </li>
                            <li>
                                Por que não sou um motorista de conforto, embora meu carro seja novo.
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            AC
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>No A/C</li>
                                <li>Driver didn't turn A/C on</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Sem A/C (Ar condicionado)</li>
                                <li>O motorista não ligou o ar</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Reclamação sobre o A/C (Motorista não liga o ar)
                                </li>
                                <li>A/C não está funcionando</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>geo</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={2} className={styles.category}>geo</td> */}
                        <td className={styles.reasons}>
                            Maps&Location
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Abscence of City\Address\Building</li>
                                <li>Incorrect position on the map</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Ausência de cidade/endereço/prédio</li>
                                <li>Localização errada no mapa</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Endereço necessário não encontrado no mapa (rua, prédio, orientação)
                                </li>
                                <li>Solicitação para adicionar endereço/comunidade/cidade</li>
                                <li>Mapa mostrando endereço errado</li>
                                <li>App não identifica minha geolocalização</li>
                                <li>O mapa não está funcionando corretamente</li>
                                <li>Minha localização no mapa do aplicativo não está correta</li>
                                <li>
                                    A localização do motorista/passageiro não aparece corretamente
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Navigation
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Navigation error</li>
                                <li>Want to use another navigator"</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Erro de navegação</li>
                                <li>Deseja usar outro tipo de navegador</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Reclamação sobre a ausência de navegação no aplicativo.</li>
                                <li>Navegador criando rota incorreta.</li>
                                <li>O navegador não cria rota para o ponto final.</li>
                                <li>Navegador criando uma rota não ideal.</li>
                                <li>Quais são os aplicativos que posso usar para abrir o local?</li>
                                <li>Chegou a um lugar diferente.</li>
                                <li>Quer usar um sistema de navegação diferente.</li>
                                <li>
                                    Sou transferido para outro sistema de navegação (não esperado).
                                </li>
                                <li>
                                    O app não calcula a distância entre mim e o passageiro corretamente.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>legal issues</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={3} className={styles.category}>legal issues</td> */}
                        <td className={styles.reasons}>
                            Licensing
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}                    </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}                    </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>O aplicativo funciona legalmente no país X?</li>
                                <li>Quando você será licenciado?</li>
                                <li>Quero um papel dizendo que estou trabalhando com o aplicativo</li>
                                <li>Preciso de uma licença para seu aplicativo</li>
                                <li>Preciso de licença para trabalhar?</li>
                                <li>O aplicativo é legal?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Government Request
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Solicitação de informações de um departamento oficial
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Penalties&Sanctions
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>About penalties&confiscations</li>
                                <li>Confirmed penalty or confiscation</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Sobre multas e reboques</li>
                                <li>Reboque ou multa confirmada</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Fui multado/carro confiscado</li>
                                <li>Serei multado por usar o aplicativo?</li>
                                <li>Meu carro seria confiscado</li>
                                <li>Parado pela polícia de trânsito</li>
                            </ul>
                        </td>
                    </tr>


                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>lost and Found</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={2} className={styles.category}>lost and Found</td> */}
                        <td className={styles.reasons}>
                            Found
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Item encontrado no veículo</li>
                                <li>Como devolver o item encontrado?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Lost
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Item perdido/esquecido em um carro
                                </li>
                            </ul>
                        </td>
                    </tr>


                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>order</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={11} className={styles.category}>order</td> */}
                        <td className={styles.reasons}>
                            Executor did not return change
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Executor não devolveu troco.</li>
                                <li>
                                    Devolvido menos troco.
                                    Por qualquer razão:
                                </li>
                                <li>Não queria</li>
                                <li>Não teve troco</li>
                                <li>
                                    Prometeu devolver o troco por outra via (transferência para cartão bancário etc.), mas até ao momento em que o cliente nos contactou não transferiu.
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Executor didn't show up
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Didn't come</li>
                                <li>Didn't find location</li>
                                <li>Didn't move</li>
                                <li>Moved to different place</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Não chegou </li>
                                <li>Não achou o local </li>
                                <li>Não saiu do local </li>
                                <li>Foi para um local diferente</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Quando o executor não chega ao ponto A:</li>
                                <li>não veio</li>
                                <li>não encontrei o endereço</li>
                                <li>não se mexeu</li>
                                <li>foi para outro luga</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Executor is late
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Late</li>
                                <li>- Long waiting</li>
                                <li>- Cancellation due to delay</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Atraso</li>
                                <li>Longa espera</li>
                                <li>Cancelamento por causa da demora</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>O executor está atrasado</li>
                                <li>O executor está se movendo lentamente</li>
                                <li>Quero cancelar o pedido porque o executor está demorando muito para chegar.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Fake order
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Denúncia de pedido falso do executor</li>
                                <li>
                                    O cliente fez um pedido falso por engano ou  estava tentando entender como o aplicativo funciona.
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            Executor raised the price
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Unreasonable price change</li>
                                <li>Extra service</li>
                                <li>Non-optimal route</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Mudança de preço sem motivo</li>
                                <li>Serviço extra</li>
                                <li>Rota diferente</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Executor aumentou o preço.</li>
                                <li>Pedir mais dinheiro (por qualquer motivo)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className={styles.reasons}>
                            Client violated order conditions
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Bargain after agreement </li>
                                <li>Extra service after acceptance</li>
                                <li>
                                    Client didn't mention the number of passengers
                                </li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <li>Negociação após o preço ser acertado</li>
                            <li>Serviço extra após o aceite do pedido</li>
                            <li>
                                Cliente não mencionou a quantidade de passageiros
                            </li>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    O cliente aceitou os termos do pedido (ex: preço), mas depois de aceitar começou a negociar nesses termos.
                                </li>
                                <li>
                                    Adicionar novos termos ao pedido (parar, esperar, passar), novos termos sem concordar em pagar taxas extras por eles
                                </li>
                                <li>
                                    O número de passageiros é superior aos assentos disponíveis.
                                </li>
                                <li>Bagagem de grandes dimensões</li>
                                <li>
                                    Passageiro tem animais de estimação com ele
                                </li>
                                <li>
                                    Excedeu a quantidade máxima de passageiros
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className={styles.reasons}>
                            Executor failed to complete the order
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Didn't complete the order</li>
                                <li>Low quality service</li>
                                <li>Took another client</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Não completou o pedido</li>
                                <li>Baixa qualidade do serviço</li>
                                <li>Pegou outro passageiro</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Executor largou o cliente ou seus pertences antes de chegar ao ponto B
                                </li>
                                <li>
                                    Não foi possível concluir o pedido devido a circunstâncias externas (mau funcionamento do veículo, falta de combustível)
                                </li>
                                <li>
                                    Incluem-se aqui todos os casos em que a ordem não foi concluída pelo executor, desconsiderando-se o fato de ele ter encerrado a ordem clicando no botão (Ordem Concluída)
                                </li>
                                <li>Executor pegou outro cliente</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td className={styles.reasons}>
                            Passenger ruined the salon
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Passageiro stragou o veículo</li>
                                <li>
                                    Consultar se o executor será indenizado pelo veículo arruinado
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td className={styles.reasons}>
                            Order cancelation
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Cancellation by Executor</li>
                                <li>Cancellation by Client</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Cancelado pelo executor</li>
                                <li>Cancelado pelo cliente</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Cliente cancelou o pedido por qualquer motivo ou nenhum:
                                </li>
                                <li>+ Mudou de ideia/recusou</li>
                                <li>+ Decidiu usar outro serviço etc.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td className={styles.reasons}>
                            Order cancelation
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <li>O cliente não pagou o pedido</li>
                            <li>
                                Existe compensação pela encomenda não paga?
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td className={styles.reasons}>
                            Client did not show up
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <li>
                                Cliente não saiu depois que o executor chegou.
                            </li>
                            <li>
                                O que fazer quando o cliente não sai?
                            </li>
                            <li>
                                Quanto tempo livre o cliente tem para sair?
                            </li>
                        </td>
                    </tr>


                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>personal information</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={6} className={styles.category}>personal information</td> */}
                        <td className={styles.reasons}>
                            Profile deletion\ restoring
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Deletion</li>
                                <li>Restoring</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Deletar</li>
                                <li>Restaurar</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Quero excluir minha conta</li>
                                <li>Como excluir uma conta</li>
                                <li>
                                    Por que eu mesmo não consigo excluir minha conta
                                </li>
                                <li>
                                    Executor perdeu o acesso a sua conta e está pedindo para restaurar o acesso.
                                </li>
                                <li>
                                    Executor cadastrado com outro número reclamando de perda de dados de pedidos anteriores e deseja restaurá-los.
                                </li>
                                <li>Quero reativar minha conta</li>
                                <li>
                                    Eu loguei e o aplicativo pediu para eu me registrar novamente
                                </li>
                                <li>
                                    Perdi o número de telefone associado à minha conta
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Blocking
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Autoban</li>
                                <li>Manual ban</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Bloqueio automatico</li>
                                <li>Bloqueio manual</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Por que estou bloqueado?</li>
                                <li>Solicitação de desbloqueio</li>
                                <li>
                                    Meu número de telefone está bloqueado/estou bloqueado
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Edit profile                    </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Status</li>
                                <li>Data</li>
                                <li>Profile Photo</li>
                                <li>Telephone Number</li>
                                <li>Vehicle</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Modo</li>
                                <li>Dados</li>
                                <li>Foto do perfil</li>
                                <li>Número de Telefone</li>
                                <li>Veículo</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Alterar foto/número/veículo/informações pessoais
                                </li>
                                <li>
                                    Não foi possível alterar a foto/número/veículo/informações pessoais
                                </li>
                                <li>
                                    Pedido de mudança de entregador para motorista ou vice-versa
                                </li>
                                <li>
                                    Eu preciso trocar a foto do meu perfil
                                </li>
                                <li>
                                    Eu quero trocar o número de telefone em minha conta
                                </li>
                                <li>Desejo alterar o meu veículo</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Document verification
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Speed up the check</li>
                                <li>Reason of rejection?</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Acelerar a verificação</li>
                                <li>Motivos de recusa?</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Processo longo de verificação de documentos, pedido para agilizar
                                </li>
                                <li>Por que fui recusado</li>
                                <li>
                                    Solicitação de verificação de documentos
                                </li>
                                <li>
                                    Verificação de documentos demorando muito
                                </li>
                                <li>
                                    Enviei todos os documentos por favor aceite minha conta
                                </li>
                                <li>
                                    já se passaram mais de 4 horas desde que adicionei meus documentos e a conta ainda não foi aceita
                                </li>
                                <li>
                                    Os documentos são claros por que minha conta foi recusada
                                </li>
                                <li>por que minha conta foi recusada</li>
                                <li>Verifique minha conta.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            Requirements documents & vehicles
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Dúvidas sobre documentos exigidos</li>
                                <li>Quais são os documentos necessários</li>
                                <li>Onde posso obter um documento?</li>
                                <li>
                                    Consultas sobre os requisitos do veículo para verificação.
                                </li>
                                <li>
                                    Quais são as qualificações do carro a ser aceito com você?
                                </li>
                                <li>Meu carro é aceito com você</li>
                                <li>Qual é o ano mínimo de fabricação exigido?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className={styles.reasons}>
                            Photocontrol
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>O que é controle por foto?</li>
                                <li>
                                    Por que não posso receber pedidos, o aplicativo está solicitando informações adicionais?
                                </li>
                                <li>Por favor, ative minha conta</li>
                                <li>
                                    Já mandei a foto do meu carro porque está pedindo de novo?
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>pricing</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={5} className={styles.category}>pricing</td> */}
                        <td className={styles.reasons}>
                            Airport & parking fee
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Paid parking</li>
                                <li>Work in Airpot and Railway Station</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Pagou estacionamento</li>
                                <li>Trabalho em aeroporto e ferrovias</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    As taxas de entrada no aeroporto estão incluídas no preço?
                                </li>
                                <li>Posso trabalhar na área do aeroporto?</li>
                                <li>Adicione a taxa do aeroporto à tarifa</li>
                                <li>
                                    Não posso esperar muito em um estacionamento pago.
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Low tarrifs
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Pagou estacionamento</li>
                                <li>Trabalho em aeroporto e ferrovias</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Por que os preços estão baixos no aplicativo?</li>
                                <li>Pedido de aumento de preços</li>
                                <li>Os preços estão sendo reduzidos</li>
                                <li>App recomenda preços baixos</li>
                                <li>Por favor, aumentem os preços, está muito baixo</li>
                                <li>Os preços são baixos</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Service fee
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Fee amount</li>
                                <li>Deduction process</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Valor do pagamento do serviço</li>
                                <li>Processo de cobrança</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Reclamações sobre taxa de comissão.</li>
                                <li>
                                    Reclamações sobre procedimento de dedução de comissões
                                </li>
                                <li>Qual é a sua comissão?</li>
                                <li>
                                    Por que o aplicativo não é mais gratuito?
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Toll roads
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Pedágio</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>A taxa inclui o preço das estradas pagas?</li>
                                <li>
                                    Executor/Cliente se recusou a pagar extra para estradas pagas.
                                </li>
                                <li>
                                    A taxa de pedágio está incluída no preço da viagem?
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            High Tariffs
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>No options</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Tarifas altas</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Preço mínimo da corrida é alta demais</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>rating system</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={2} className={styles.category}>rating system</td> */}
                        <td className={styles.reasons}>
                            Executor rating and priority
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Info about rating</li>
                                <li>Rating recalculation</li>
                                <li>Remove review</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Informações sobre prioridade</li>
                                <li>Recalculo de prioridade</li>
                                <li>Remoção de comentario</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Por que minha classificação caiu, não recebi nenhuma crítica negativa.
                                </li>
                                <li>- Solicitação de exclusão de classificação,</li>
                                <li>A prioridade é calculada errada</li>
                                <li>Exclua esta crítica negativa</li>
                                <li>
                                    Eu tenho boas avaliações, por que minha pontuação caiu?
                                </li>
                                <li>
                                    Tenho boas críticas, por que minha classificação caiu?
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Client rating
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Info about rating</li>
                                <li>Rating recalculation</li>
                                <li>Remove review</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Informações sobre avaliação</li>
                                <li>Recalculo de prioridade</li>
                                <li>Remoção de comentário</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Por que minha classificação é baixa?</li>
                                <li>Como verificar a taxa do executor?</li>
                                <li>
                                    Desejo excluir a avaliação negativa dos drivers
                                </li>
                                <li>
                                    Quero excluir uma avaliação negativa do executor
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>safety</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={8} className={styles.category}>safety</td> */}
                        <td className={styles.reasons}>
                            Accident
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>With injuries</li>
                                <li>Without injuries</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Com ferimentos</li>
                                <li>Sem ferimentos</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Executor fez um acidente</li>
                                <li>O cliente fez um acidente</li>
                                <li>Tivemos um acidente de carro</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Dangerous driving
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Traffic rules violation</li>
                                <li>Vehicle technical condition</li>
                                <li>Passenger actions</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Violação das leis de trânsito</li>
                                <li>Condição técnica do veículo</li>
                                <li>Ações do passageiro</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>
                                    Condução perigosa (velocidade, distração ao telefone, dormir enquanto dirige etc...)
                                </li>
                                <li>O motorista está dirigindo descuidadamente</li>
                                <li>Motorista ultrapassou o sinal vermelho.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Harassment
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Attempt to get acquainted</li>
                                <li>Intimate offers</li>
                                <li>Acts of an intimate nature</li>
                                <li>Attempted rape</li>
                                <li>Fact of rape</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Tentativa de se conhecer</li>
                                <li>Ofertas íntimas</li>
                                <li>Atos de natureza íntima</li>
                                <li>Tentativa de estupro</li>
                                <li>Ocorrência de estupro</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>During the order or after executor/customer:</li>
                                <li>Pestered.</li>
                                <li>made intimate offers</li>
                                <li>texted the other party</li>
                                <li>This driver harassed me</li>
                                <li>This passenger Harassed me</li>
                                <li>Molested</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className={styles.reasons}>
                            Conflict
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Threats and insults</li>
                                <li>Discrimination</li>
                                <li>Fight</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Ameaças e insultos</li>
                                <li>Discriminação</li>
                                <li>Conflito</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Durante a encomenda ou após executor/cliente:</li>
                                <li>Ameaçado</li>
                                <li>Insultado</li>
                                <li>uma das partes insultou pessoalmente a outra</li>
                                <li>Briga, dano físico.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className={styles.reasons}>
                            Property damage
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Damaged by Executor</li>
                                <li>Damaged by Client</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Danos feito pelo Executor</li>
                                <li>Danos feito pelo cliente</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>O passageiro quebrou o retrovisor do meu carro</li>
                                <li>O motorista rasgou minha bolsa</li>
                                <li>O motorista quebrou meu telefone</li>
                                <li>Danos materiais.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className={styles.reasons}>
                            Theft
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Armed robbery</li>
                                <li>Theft</li>
                                <li>Hijacking</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Assalto a mão armada</li>
                                <li>Roubo</li>
                                <li>Sequestro</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Roubo</li>
                                <li>
                                    O motorista/passageiro roubou meu telefone ou outros funcionários
                                </li>
                                <li>Sequestro</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className={styles.reasons}>
                            Offensies
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Executor intoccicated alcohol or drugs</li>
                                <li>Driver without documents</li>
                                <li>Transportation of prohibited substances</li>
                                <li>Financial fraud (fake kuurs)</li>
                                <li>Outsiders in the vehicle</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Executor intoxicado com álcool ou drogas</li>
                                <li>Condutor sem documentos</li>
                                <li>Transporte de substâncias proibidas</li>
                                <li>Fraude financeira (nota falsa)</li>
                                <li>Estranhos no veículo</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Executor embriagado com álcool ou drogas</li>
                                <li>Condutor sem documentos</li>
                                <li>Transporte de substâncias proibidas</li>
                                <li>Fraude financeira (nota falsa)</li>
                                <li>Estranhos no veículo</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td className={styles.reasons}>
                            Missing person
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>Missing</li>
                                <li>Kidnaped</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Desaparecido</li>
                                <li>Sequestro</li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>Desaparecido</li>
                                <li>Sequestrado</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td rowSpan={2} style={{ background: '#000', color: '#fff', padding: '0 4px' }}>C</td>
                        <th colSpan={4} className={styles.category}>other</th>
                    </tr>

                    <tr>
                        <th style={{color:'#fff'}}>Reasons</th>
                        <th style={{color:'#fff'}}>Reason details </th>
                        <th style={{color:'#fff'}}>Reasons details (pt)</th>
                        <th style={{color:'#fff'}}>Catalogue (pt)</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        {/* <td rowSpan={3} className={styles.category}>other</td> */}
                        <td className={styles.reasons}>
                            Taxi stand
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            {/* Empty*/}
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className={styles.reasons}>
                            Hold of funds
                        </td>
                        <td className={styles.reasonDetails}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            {/* Empty*/}
                        </td>
                        <td className={styles.catalog}>
                            {/* Empty*/}
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={styles.reasons}>
                            Unclear request
                        </td>
                        <td className={styles.reasonDetails}>
                            <ul>
                                <li>During massive tech issue</li>
                                <li>not During massive tech issue</li>
                            </ul>
                        </td>
                        <td className={styles.reasonDetailsPt}>
                            <ul>
                                <li>Durante um grande problema de tecnologia</li>
                                <li>
                                    Quando não houver um grande problema de tecnologia
                                </li>
                            </ul>
                        </td>
                        <td className={styles.catalog}>
                            <ul>
                                <li>o usuário disse olá e não escreveu mais nada</li>
                                <li>o usuário escreveu coisas incompreensíveis</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>

    )
}

export default TagsTable