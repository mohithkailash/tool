import React from 'react';
import Select from 'react-select';
import "./home.css";

import crop from './crop.png'
import drop from './drop.png'
import dollar from './dollar_sign.png'
import { useState } from 'react';

import soil from './soil.png';
import irrigation from './irrigation.png'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const itype = [
  { label: "Flood  ", value:  1},
  { label: "Basin  ", value: 2 },
  { label: "Border  ", value: 3 },
  { label: "Furrow  ", value: 4 },
  { label: " Sprinkler Permanent ", value:  5},
  { label: "Hand-Move  ", value: 6 },
  { label: "Linear-Move  ", value:  7},
  { label: " Side-Roll ", value: 8 },
  { label: "Micro-Mini ", value:  9},
  { label: " Hose-Pull ", value:  10},
  { label: "Center-Pivot ", value:  11},
]
const soily = [
  { label: "Sand ", value: 1 },
  { label: "Sand-Fine ", value:  2},
  { label: "Loamy Sand ", value:  3},
  { label: "Loamy Sand- Fine", value:  4},
  { label: "Sandy Loam ", value: 5},
  { label: "Sandy Loam- Fine ", value:  6},
  { label: "Loam ", value:  7},
  { label: "Silt ", value: 8 },
  { label: "Silty Loam ", value:  9},
  { label: "Sandy Clay Loam ", value:  10},
  { label: "Clay Loam ", value:  11},
  { label: "Silty Clay Loam", value: 12 },
  { label: "Sandy Clay ", value:  13},
  { label: "Silty", value:  14},
]

const crops =[
  { label: "Alfalfa ", value: 1 },
  { label: "Sugar beets ", value:  2},
  { label: " Wheat", value: 3 },
  { label: " Bermuda Grass", value:  4},
  { label: " Klein Grass", value:  5},
  { label: "Sudan Grass ", value:  6},
  { label: "Lettuce ", value: 7 },
  { label: "Carrots ", value:8  },
  { label: "Broccoli ", value:  9},
  { label: "Onion ", value: 10 },
  { label: "Spinach ", value: 11 },
  { label: " Sweet Corn", value:  12},
]


function Home() {
       const [pa, setPa] = useState(0);
       let [lr, setlr] = useState(0);
       let [pr ,setPr] = useState(0);
       const [a,seta]    = useState('');
       const [b,setb] = useState('');
       const [c,setc] = useState('');
       const [d,setd] = useState('');
       let [d1,setd1] = useState(0);
       let [d2,setd2] = useState(0);
       let [d3,setd3] = useState(0);
       let [d4,setd4] = useState(0);
       let [d5,setd5] = useState(0);
       const [wec,setwec] = useState(null);
       const [Eta,seteta] = useState(0);
       const [ie, setie] = useState(100);
       function cpot(){
           //console.log(pa)
           let Ym =0;
           let ky =0;
           let ETm=0;
           let Ya=0;
            if (pa == 1){
                ky=1;
                ETm=1500;
                Ym=23;
            }
            else if ( pa == 2){
                ky = 1.05;
                ETm = 1050;
                Ym = 120;
            }
            else if (pa == 3){
                ky = 1.05;
                ETm = 620;
                Ym = 7.5;
            }
            else if (pa == 4){
                ky = 0.9;
                ETm = 1200;
                Ym = 19;
            }
            else if (pa == 5){
                ky = 0.9;
                ETm = 1250;
                Ym = 24;
            }
            else if (pa == 6){
                ky = 0.9;
                ETm = 800;
                Ym = 14;
            }
            else if (pa == 7){
                ky = 1.15;
                ETm = 320;
                Ym = 20;
            }
            else if (pa == 8){
                ky = 1.1;
                ETm = 600;
                Ym = 110;
            }
            else if (pa == 9){
                ky = 1;
                ETm = 350;
                Ym = 15;
            }
            else if (pa == 10){
                ky = 1.1;
                ETm = 800;
                Ym = 60;
            }
            else if (pa == 11){
                ky = 1.15;
                ETm = 200;
                Ym = 14;
            }
            else if (pa == 12){
                ky = 1.1;
                ETm = 600;
                Ym = 27;
            }
        Ya = Ym*(ky*((Eta/ETm)-1)+1)
        console.log(Ya)
        seta(Ya)
       }
       function rpot(){
           let ky=0;
           let Etm=0;
           if (pa == 1){
            ky=1;
            Etm=1500;
           }
           else if ( pa == 2){
            ky = 0.85;
            Etm = 1050;
        }
        else if (pa == 3){
            ky = 1.05;
            Etm = 620;
        }
        else if (pa == 4){
            ky = 0.9;
            Etm = 1200;
        }
        else if (pa ==5 ){
            ky = 0.9;
            Etm = 1250;
        }
        else if (pa == 6){
            ky = 0.9;
            Etm = 800;
        }
        else if (pa ==7 ){
            ky = 1.15;
            Etm = 320;
        }
        else if (pa == 8){
            ky =1.1 ;
            Etm =600 ;
        }
        else if (pa == 9){
            ky = 1;
            Etm = 350;
        }
        else if (pa == 10){
            ky =1.1 ;
            Etm = 800;
        }
        else if (pa ==11 ){
            ky = 1.15;
            Etm = 200;
        }
        else if (pa ==12 ){
            ky = 1.1;
            Etm = 600;
        }
        
           pr=100*(ky*(1-(Eta/Etm)))
           setb(pr)
       }
       function clr(){
        if (pa === 0){
            alert("Please enter crop type")
            return
        }
        let eci =0;
        let ecw =0;
        let ETm =0;
        let iw =0;
        if (pa == 1){
            eci = 2;
            ecw = wec ?? 1.3;
            ETm=1500;
           }
        else if ( pa == 2){
           eci=7;
           ecw= wec ?? 4.7;
           ETm=1050;
        }
        else if (pa == 3){
           eci=6;
           ecw= wec ?? 4;
           ETm=620;
        }
        else if (pa == 4){
           eci=6.9;
           ecw= wec ?? 4.6;
           ETm=1200;
        }
        else if (pa ==5 ){
           eci=4;
           ecw= wec ?? 2.7;
           ETm=1250;
        }
        else if (pa == 6){
           eci=2.8;
           ecw= wec ?? 1.9;
           ETm=800;
        }
        else if (pa ==7 ){
            eci=1.3;
            ecw= wec ?? 1;
            ETm=320;
        }
        else if (pa == 8){
          eci=1;
          ecw= wec ?? 0.8;
          ETm=600;
        }
        else if (pa == 9){
           eci=2.8;
           ecw= wec ?? 1.9;
           ETm=350;
        }
        else if (pa == 10){
          eci=1.2;
          ecw= wec ?? 0.9;
          ETm=800;
        }
        else if (pa ==11 ){
           eci=2;
           ecw= wec ?? 1.3;
           ETm=200;
        }
        else if (pa ==12 ){
          eci=1.7;
          ecw= wec ?? 1.1;
          ETm=600;
        }
        lr = ecw/((5*eci) - ecw)
        iw= (ETm * 100)/((ie)*(1-lr))
        setc((lr*100).toFixed(2))
        setd(iw.toFixed(2))
       }
       function LinearProgressWithLabel(props) {
            return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '70%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
                </Box>
            </Box>
            );
        }
        function cald(){
            if (pa == 0){
                alert("Please enter crop type")
                return
            }
            let ky=0;
            let Etm=0;
            if (pa == 1){
             ky=1;
             Etm=1500;
            }
            else if ( pa == 2){
             ky = 0.85;
             Etm = 1050;
         }
         else if (pa == 3){
             ky = 1.05;
             Etm = 620;
         }
         else if (pa == 4){
             ky = 0.9;
             Etm = 1200;
         }
         else if (pa ==5 ){
             ky = 0.9;
             Etm = 1250;
         }
         else if (pa == 6){
             ky = 0.9;
             Etm = 800;
         }
         else if (pa ==7 ){
             ky = 1.15;
             Etm = 320;
         }
         else if (pa == 8){
             ky =1.1 ;
             Etm =600 ;
         }
         else if (pa == 9){
             ky = 1;
             Etm = 350;
         }
         else if (pa == 10){
             ky =1.1 ;
             Etm = 800;
         }
         else if (pa ==11 ){
             ky = 1.15;
             Etm = 200;
         }
         else if (pa ==12 ){
             ky = 1.1;
             Etm = 600;
         }
         d1 = ky*(1-((0.9 * Etm)/Etm)) ;
         d2 = ky*(1-((0.8 * Etm)/Etm)) ;
         d3 = ky*(1-((0.7 * Etm)/Etm)) ;
         d4 = ky*(1-((0.6 * Etm)/Etm)) ;
         d5 = ky*(1-((0.5 * Etm)/Etm)) ;
         setd1((d1*100).toFixed(2))
         setd2((d2*100).toFixed(2))
         setd3((d3*100).toFixed(2))
         setd4((d4*100).toFixed(2))
         setd5((d5*100).toFixed(2))
         
        }
      const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2
            }}
        />
    );
    let data = [
        { argument: 'For 10%', value: d1 },
        { argument: 'For 20%', value: d2 },
        { argument: 'For 30%', value: d3 },
        { argument: 'For 40%', value: d4 },
        { argument: 'For 50%', value: d5 },
      ];
    
   
    return (
        <div className = "home">
                <div className = "home_row">
                    <div  className="r1">
                        <div className='card'>
                            <div className='crop-image'>
                            <img src={crop} />   
                            <p> Crop</p>
                            </div>
                            <div className = "crop_details ">
                            <p className = "input">
                                <Select 
                                onChange={(opt)=>{
                                let val=opt.value;
                                console.log(opt.label, opt.value)
                                setPa(val)
                                }
                                }
                                options ={crops}
                                //onChange={opt => console.log(opt.label, opt.value)}
                                 />
                            </p> 
                            <p><form>
                            <label>Actual ET:{}{' '}
                            <div className='bar'> <input type="number" placeholder = "mm" style={{width: "50px"}} onChange = {e => seteta(e.target.value)}/></div>
                            </label>
                            </form></p>
                            </div>
                        
                        </div>
                
                        <div className='card'>
                    <div className='drop-image'>
                        <img src={drop} />   
                        <p> Irrigation Water Salinity</p>
                    </div>
                    <div className = "crop_details ">
                        <p className = "input">
                    
                        </p> 
                        <p><form>
                        <label>Water EC (dS/m):{' '}
                        <input type="number" placeholder = "(dS/m)" style={{width: "55px"}} onChange = {e => setwec(e.target.value)}/>
                        </label>
                    </form></p>
                    </div>
                    
                        </div>
                
                        <div className='card'>
                    <div className='soil-image'>
                    <img src={soil} />   
                    <p> Soil Texture</p>
                    </div>
                    <div className = "crop_details ">
                    <p className = "input">
                    <Select
                    options ={soily}
                    onChange={opt => console.log(opt.label, opt.value)} />
                    </p> 
                    <p><small> <a href={"https://casoilresource.lawr.ucdavis.edu/gmap/"}> Look up soil map</a></small></p>
                    </div>
                    
                        </div>
                
                        <div className='card'>
                    <div className='irrigation-image'>
                    <img src={irrigation} />   
                    <p> Irrigation System</p>
                    </div>
                    <div className = "crop_details ">
                    <p className = "input">
                    <Select
                    options ={itype}
                    onChange={opt => console.log(opt.label, opt.value)} />
                    </p> 
                    <p className="if"><form>
                    <label>Irrigation Efficiency(%):{' '}
                    <input type="number" placeholder = "%" style={{width: "50px"}} onChange = {e => setie(e.target.value)}/>
                    </label>
                    </form>
                    
                    </p>
                    </div>
                    
                    
                        </div>
                        
                    </div>

                    <div className="sep">
                    <ColoredLine color="black" />
                    </div>

                    <div className="r2">
                        <div className = "card">
                            <h1> Potential Yield </h1>
                            <h6>For accurate results, Enter crop type and Actual ET</h6>
                            {pa .myPaVal}
                            <button className="gooey-button" onClick = {cpot}>Calculate</button>
                            <h4>{a}</h4>
                        </div>
                        <div className="card">
                                <h1>Yield Reduction</h1>
                                <h6>For accurate results, Enter crop type and Actual ET</h6>
                                <button className="gooey-button" onClick = {rpot}>Calculate</button>
                                <Box sx={{ width: '100%' }}>
                                <LinearProgressWithLabel className="pb" value={b} />
                                </Box>
                        </div>
                    </div>  
                    
                    <div className="r3">
                        <div className = "card">
                            <h1> Leaching Requirements and Irrigation Water Depth </h1>
                            <h6>For accurate results, Enter crop type, Actual ET and Irrigation Efficiency</h6>
                            {pa.myPaVal}
                            <button className="gooey-button" onClick = {clr}>Calculate</button>
                            <h4>Leaching Requirement: {c} %</h4>
                            <h4>Irrigation Water depth: {d} mm</h4>
                        </div>
                    </div> 

                    <div className="r4">
                        <div className="card">
                        <h1>Deficit Irrigation</h1>
                        <button className="gooey-button" onClick = {cald}>Calculate</button>
                        <h6>X-axis: Deficit Irrigation(%), Y-axis: Yield Reduction(%)</h6>
                        <div className="graph">
                        <Paper className="graph1">
                        <Chart
                            data={data}
                        >
                            <ArgumentAxis  />
                            <ValueAxis />
                        
                            <BarSeries valueField="value" argumentField="argument" />
                            </Chart>
                        </Paper>
                        </div>
                        </div>
                    </div>
                </div>     
        </div>    
    )
}

export default Home
