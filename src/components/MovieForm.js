import React, { useState } from 'react';

function MovieForm({ addMovieList }) { // komponen dideklarasikan dulu
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [aktris, setAktris] = useState('');


    const sumbitMovie = (e) => { // arrow function
        e.preventDefault();
        addMovieList({ name, year, director, aktris });
        setName('');
        setYear('');
        setDirector('');
        setAktris('');
    };

    return (
        <form onSubmit={sumbitMovie}>
            <input 
                type="text"
                placeholder="Judul Film"
                value={name}
                onChange={(e)=> setName(e.target.value)} 
                    // onChange sebagai event handler untuk event change pada elemen input. Jadi, ketika user mengetik atau ubah nilai input, maka event change akan berjalan
                    // (e)=> setName(e.target.value) sebagai arrow function untuk callback event change
                    // (e) adalah parameter arrow function
                    // e.target merujuk pada element yang memicu event
            />
            <input 
                type="number"
                placeholder="Tahun Rilis Film"
                value={year}
                onChange={(e)=> setYear(e.target.value)} 
            />
            <input 
                type="text"
                placeholder="Sutradara Film"
                value={director}
                onChange={(e)=> setDirector(e.target.value)} 
            />
            <input 
                type="text"
                placeholder="Pemeran Utama Film"
                value={aktris}
                onChange={(e)=> setAktris(e.target.value)} 
            />
            <button type='submit'> Add List Film</button>
        </form>
    );
}

export default MovieForm;