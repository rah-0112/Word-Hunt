import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import './Header.css';
import categories from '../../data/category';

const Header = ({category, setcategory, word, setword, lightmode}) => {

    const darkTheme = createTheme({
        palette:{
            primary:{
                main: lightmode ? "#000" : "#fff",
            },
            type: lightmode ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
        setcategory(language);
        setword("");
    }

    return (
        <div className='header'>
            <span className='title'>{word ? word :"Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        id="standard-basic" 
                        label="Search a Word" 
                        value={word}
                        onChange={(e) => setword(e.target.value)}
                    />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem 
                                    key={option.label} 
                                    value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;
