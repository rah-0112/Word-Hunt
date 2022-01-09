import React from 'react'
import './Definitions.css';

const Definitions = ({word,meanings,category,lightmode}) => {
    return (
        <div className='meanings'>

        {meanings[0] && word && category === "en" && (
            <audio
            style={{ backgroundColor: "#fff", borderRadius: 10 , width: "100%"}}
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
            >
            Your browser does not support the audio element.
            </audio>
        )}


            {word === "" ? (
                <span className='subTitle'>Start By Typing a Word in Search</span>
            ) : (
                meanings.map((mean) =>
                mean.meanings.map((item) =>
                  item.definitions.map((def) => (
                    <div
                      className="singleMean"
                      style={{
                        backgroundColor: lightmode ? "#3b5360" : "#f5f5f5",
                        color: lightmode ? "white" : "black",
                      }}
                    >
                      <b>{def.definition}</b>
                      <hr style={{ backgroundColor: "black", width: "100%" }} />
                      {def.example && (
                        <span>
                          <b>Example :</b> {def.example}
                        </span>
                      )}
                      {def.synonyms && (
                        <span>
                          <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                        </span>
                      )}
                    </div>
                  ))
                )
              )
            )}
        </div>
    )
}

export default Definitions;
