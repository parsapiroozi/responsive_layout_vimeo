
import React, { Component } from 'react';

class ContentCard extends Component {

    renderContentCard() {
        if(parseInt(this.props.id) % 2 === 0) {
            return (
                <div className='content-card-container' id={'content-card' + this.props.id}>
                    <div className='content-card-media-container' id={'content-card-media' + this.props.id}>
                        <img className='content-card-media-picture' id={'content-card-picture' + this.props.id} src={this.props.mediaSource} alt='media not found' />
                    </div>
                    <div className='content-card-text-container' id={'content-card-text' + this.props.id}>
                        <span className='content-card-text-header' id={'content-card-text-header' + this.props.id}>{this.props.cardHeader}</span>
                        <br />
                        <p className='content-card-text-text'>
                            {this.props.cardText}
                        </p>
                    </div>
                </div>
            );

        } else {
            return (
                <div className='content-card-container' id={'content-card' + this.props.id}>
                    <div className='content-card-text-container' id={'content-card-text' + this.props.id}>
                        <span className='content-card-text-header' id={'content-card-text-header' + this.props.id}>{this.props.cardHeader}</span>
                        <br />
                        <p className='content-card-text-text'>
                            {this.props.cardText}
                        </p>
                    </div>
                    <div className='content-card-media-container' id={'content-card-media' + this.props.id}>
                        <img className='content-card-media-picture' id={'content-card-picture' + this.props.id} src={this.props.mediaSource} alt='media not found' />
                    </div>
                </div>
            );

        }

    }
    
    render() { 
        return (this.renderContentCard());

    }

}
 
export default ContentCard;
