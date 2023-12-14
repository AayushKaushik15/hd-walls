import {useEffect, useState} from "react";
import Card from "./Cards";


const Body = () => {

    const [dataOne, setData] = useState([]);
    const [stringName, setString] = useState("")

    useEffect(() => {
        fetchData();
        clickHandle();
    }, [])


    const MathRandom = parseInt(Math.random()*20)
    console.log(MathRandom)

    const fetchData = async () => {
        try {
            const response = await fetch (`https://pixabay.com/api/?key=28518086-d024fb8f36bbe77da5a2aa627&q=${stringName}&image_type=photo&pretty=true&per_page=30&page=${MathRandom}`)
            const data = await response.json();
            console.log(data)
            setData(data?.hits)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSpanClick = (searchTerm) => {
        setString(searchTerm);
        // Add your search functionality here
        // e.g., performSearch(searchTerm);
      };

    const clickHandle = () => {
        fetchData();
    };

    return (
        <div className="body-container">
            <div className="grid-container">
                <div className="left-box">
                    <h1>The most powerful photo engine in the world.</h1>
                    <p className="left-para">Welcome to the Official Unsplash API. Create with the largest open collection of high-quality photos.</p>

                    <div className="left-box-buttons">
                        <button className="btn1">Register as a developer</button>
                        <button className="btn2">View the document</button>
                    </div>
                    <p className="last-para">
                        Interested in using the Unsplash API in a high-volume application? Get in touch with our Partnerships team at partnerships@unsplash.com
                    </p>
                </div>
                <div className="right-box">
                    <img src="https://unsplash.com/assets/api/api-tools-sdks-d346a462c6a4b79efe4c60e183153d205f94eba6dadf5387fd76a8bee309da5f.svg" alt="" />
                </div>
            </div>

            <div className="social-tags">
                <div>
                    <span class="material-symbols-outlined">
                        public
                    </span> 
                    <div className="tags">
                        <h1>1.8B</h1>
                        <p>request/month</p>
                    </div>
                </div>
                <div>
                <span class="material-symbols-outlined">
                    image
                </span>
                    <div className="tags">
                        <h1>5.7M</h1>
                        <p>photos/requests</p>
                    </div>
                </div>
                <div>
                <span class="material-symbols-outlined">
                    person
                </span>
                    <div className="tags">
                        <h1>356.2k</h1>
                        <p>photographers</p>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <img src="https://unsplash.com/assets/api/api-photo-grid@2x-388d83e210e483af53295e6574d71e343557875502b68b56b3cf0e1c0040b440.jpg" alt="" />
            </div>


            <div className="last-flow">
                <div className="topic-text">
                    <h1>Designed and optimized for your workflow</h1>
                    <p>We've built the Unsplash API to fit right into your workflow. Here are some helpful tools.</p>
                </div>

                <div className="tool-box">
                    <div className="box-1">
                        <div className="one">
                        <h2>Dynamically resizable images</h2>
                        <p>Every image URL returned by the API can easily be manipulated to dynamically adjust the dimensions, crop, and quality of the image in realtime.</p>

                        </div>
                        <img src="https://unsplash.com/assets/api/api-tools-crop-5d142f964181ada34f2dfccdd7e2953c0deff91c821066fc24eaa3e2de1e9bc8.svg" alt="" />
                    </div>


                    <div className="box-1">
                        <div className="one">
                        <h2>Dynamically resizable images</h2>
                        <p>Every image URL returned by the API can easily be manipulated to dynamically adjust the dimensions, crop, and quality of the image in realtime.</p>

                        </div>
                        <img src="https://unsplash.com/assets/api/api-tools-libs-1c8c2b4d01542c15c660aa47300335f92947f2bb12bbd4a72241fc9740e511a2.svg" alt="" />
                    </div>
                    
                </div>

                <div className="search-box-container">
                    <div className="searchBar">
                        <input type="text" placeholder="Search images..." value={stringName} onChange={(e) => {
                            setString(e.target.value)
                        } }/>
                        <span onClick={clickHandle} class="material-symbols-outlined">
                            search
                        </span>
                    </div>

                    <div className="trends">
                        <span>Trendings <i class="fa-solid fa-arrow-trend-up"></i>
                        </span>
                        
                        <span onClick={() => handleSpanClick("Mountains")}>Mountain</span>
                        <span onClick={() => handleSpanClick("Nature")}>Nature</span>
                        <span onClick={() => handleSpanClick("Animals")}>Animals</span>
                        <span onClick={() => handleSpanClick("Coding")}>Coding</span>
                    </div>
                </div>
                

                <div className="card-flow">
                    {
                        dataOne && dataOne.map((value) => (
                            <Card dataInfo = {value} key = {value.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;