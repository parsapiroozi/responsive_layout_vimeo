
import React, { Component } from 'react';

class ContentCard extends Component {

    renderContentCard() {

        if(parseInt(this.props.id) % 2 === 0) {
            return (
                <div className="content-card-container" id={"content-card" + this.props.id}>
                    <div className="content-card-container-media">
                        <img src={this.props.imageMedia} alt="media not found" />
                    </div>
                    <p className='content-card-text'>
                        <span className="content-card-text-header" id={"content-card-text-header" + this.props.id}>{this.props.cardHeader}</span>
                        <br />
                        <span className="content-card-text-text">{this.props.cardText}</span>
                    </p>
                </div>
            );

        } else {
            return (
                <div className="content-card-container" id={"content-card" + this.props.id}>
                    <p className='content-card-text'>
                        <span className="content-card-text-header" id={"content-card-text-header" + this.props.id}>{this.props.cardHeader}</span>
                        <br />
                        <span className="content-card-text-text">{this.props.cardText}</span>
                    </p>
                    <div className="content-card-container-media">
                        <img src={this.props.imageMedia} alt="media not found" />
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
