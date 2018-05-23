import React from 'react';

export default class BinarySearch extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: null,
            message: null
        }
    }
    
    binarySearch(arr, value, start=0, end=arr.length-1, count=0) {
        let message = null;
        count++;
        if (start > end) {
            message = index;
        }    
        const index = Math.floor((start + end) / 2);
        if(arr[index] === value){
            message = index;
        }
        if(message) {
            this.setState({
                message,
                count
            });
            return;
        }
        if(arr[index] < value) {
            return this.binarySearch(arr, value, index + 1, end , count);
        }
        if(arr[index] > value) {
            return this.binarySearch(arr, value, start, index - 1, count);
        }
    }


    render(){

        const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
        let sortedArr = arr.sort((a,b) => a-b);

        return (
            <form onSubmit={event=> {event.preventDefault(); const inputValue = Number(event.target.search.value);
            this.binarySearch(sortedArr, inputValue);
            event.target.search.value = '';
            }}>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                <input type="number" name='search' placeholder="number" />
                <button>Submit</button>
                <div className="output-box">
                Number of iterations: {this.state.count}<br/>
                Index of value: {this.state.message}
                </div>
            </form>
        );
    };
}