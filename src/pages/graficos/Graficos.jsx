
import Chart from 'react-google-charts';

export const Graficos=()=>{
    const data = [
        ['Meses', 'Nordeste', 'Norte', 'Suldeste', 'Sul', 'Centro-Oeste'],
        ['Janeiro', 1000, 400, 200, 200, 200],
        ['Fev', 1170, 460, 250,200,200],
        ['Mar', 660, 1120, 300,200,200],
       

      ];
    
      const options = {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
      };
    return(
        <div>
            <h1>Estatistica de jogo</h1>
            <div className="dados-gerais">
                <div className='quadrados-dados'>
                    <div className='quadrado-jogo'>
                    Quantidade geral de jogadores{20}
                   
                    </div>
                    <div className='quadrado-jogo'>
                    Idade media de jogadores
                  {40}
                </div>
                <div className='quadrado-jogo'>
                    Tempo médio de jogo {30}
                </div>

                </div>
          <div className='quadrado-estatistica'>
                <div>
                    Região com mais geral de jogadores
                    <div style={{ width: '600px', height: '300px' }}>
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
                </div>
              
                <div className='nome-jogadores'>
                    Ultimos 5 jogadores
                    <p>Carlos ...</p>
                    <p>Carlos ...</p>
                    <p>Carlos ...</p>
                    <p>Carlos ...</p>

                </div>
            </div>
            </div>
        </div>
    )
}