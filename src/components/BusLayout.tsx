import React from 'react';
import './BusLayout.css';

const Seat = ({ seat, onSeatSelect, selectedSeat }: any) => {
    return (
        <div className={`seat ${selectedSeat === seat.id ? 'selected':''} ${seat.available ? '' : seat.gender === 'F' ? 'female-booked' : 'booked'}`} title={seat.seatNumber} onClick={()=>onSeatSelect(seat)}>
            {seat.seatNumber}<div className='seat-inner'></div>
        </div>
    )
}

const BusLayout = ({ seats, onSeatSelect, selectedSeat }: any) => {
    return (
        <div className="bus-layout">
            <div className='bus-upper-layout'>
                <div className='bus-dack-1'>Lower Deck</div>
                <div className='bus-dack'>
                    <div>
                        <div className='row-items'>
                            {seats.slice(0, 5).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                        <div className='row-items'>
                            {seats.slice(5, 10).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                        <div className='row-items' />
                        <div className='row-items'>
                            {seats.slice(10, 15).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                    </div>
                    <div className='last-seat'>
                        {seats.slice(15, 16).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                    </div>
                </div>

                <div className='bus-dack-1'>Upper Deck</div>
                <div className='bus-dack'>
                    <div>
                        <div className='row-items'>
                            {seats.slice(16, 21).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                        <div className='row-items'>
                            {seats.slice(21, 26).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                        <div className='row-items' />
                        <div className='row-items'>
                            {seats.slice(26, 31).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                        </div>
                    </div>
                    <div className='last-seat'>
                        {seats.slice(31, 32).map((e:any) => <Seat onSeatSelect={onSeatSelect} seat={e} selectedSeat={selectedSeat}/>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusLayout;
