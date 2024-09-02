import Card from "./Components/card";
const App = () => {




    const element = () => `
    
    <main>
        <div  class="header">
                <h1>Realiable, efficient delivery</h1>
                <h1>Powered by Technology</h1>
                <p>
                    Our Artificial intelligence powered tools use millions 
                    of project data points to ensure that your project is successful
                </p>
        </div>
        <div class="container-card">

            ${Card(
                {

                title: 'Team Builder',
                description : 'Scans our talent network to create the optimal team for your project',
                icon: './images/icon-team-builder.svg'

                }
            ).element()}
            
            ${Card(
                {

                title: 'Supervisor',
                description : 'Monitors activity to identify project roadblocks',
                icon: './images/icon-supervisor.svg'

                }
            ).element()}
            
            ${Card(
                {

                title: 'karma',
                description : 'Regularly evaluates our talent to ensure quality',
                icon: './images/icon-karma.svg'

                }
            ).element()}

            ${Card(
                {

                title: 'calculator',
                description : 'Users data past projects to provide better delivery estimates',
                icon: './images/icon-calculator.svg'

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