import Card from "./Components/card";
const App = () => {




    const element = () => `
    
    <main>
        <div  class="header">
                <h1 class="header-title">Realiable, efficient delivery</h1>
                <h1 class="header-title" >Powered by Technology</h1>
                <p class="header-info">
                    Our Artificial intelligence powered tools use millions 
                    of project data points to ensure that your project is successful
                </p>
        </div>
        <div class="container-card">

            ${Card(
                {

                    title: 'Supervisor',
                    description: 'Monitors activity to identify project roadblocks',
                    icon: '/images/icon-supervisor.svg',
                    color: "hsl(180, 62%, 55%)"
                }
            ).element()}

            ${Card(
        {

            title: 'Team Builder',
            description: 'Scans our talent network to create the optimal team for your project',
            icon: '/images/icon-team-builder.svg',
            color: "hsl(0, 78%, 62%)"

        }
    ).element()}
            

            
            ${Card(
        {

            title: 'karma',
            description: 'Regularly evaluates our talent to ensure quality',
            icon: '/images/icon-karma.svg',
            color: "hsl(34, 97%, 64%)"

        }
    ).element()}

            ${Card(
        {

            title: 'calculator',
            description: 'Users data past projects to provide better delivery estimates',
            icon: './images/icon-calculator.svg',
            color: 'hsl(212, 86%, 64%)'

        }
    ).element()}
            
                
        </div>
    </main>

  `;
    return {
        element
    }
}
export default App