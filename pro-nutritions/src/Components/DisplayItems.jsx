import React from 'react';

const DisplayItems = (props) => {
    return (
        <div className="box">
            <div>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={props.item.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{props.item.name}</strong> <br/>
                                <small id={props.item.name}>{props.item.cal}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className={props.item.name} type="number" min="1" />
                            </div>
                            <div className="control" onClick={props.getValue}>
                                <button className="button is-info" name={props.item.name}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DisplayItems;