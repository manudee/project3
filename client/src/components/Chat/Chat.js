import React from "react";

class Chat extends React.Component {

	constructor(props) {
		super(props);

		this.state= {
			username: '',
			message:'',
			messages: []
		};

		this.socket = io(PORT);
	}

	render() {

		return(

			<div className="container">
				<div className="row">
					<div className="col-4">
						<div className="card">
							<div className="card-body">
								<div className="card-title">Chat</div>
								
								<div className="messages">

									{this.state.messages.map(message => {
										return (
											<div>{message.author}: {message.message}</div>
										)
									})}

								</div>
							</div>
							<div className="card-footer">
								<input type="text" placeholder="Username" className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Message" className="form-control"/>
                                <br/>
                                <button className="btn btn-primary form-control">Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		);


	}


}

export default Chat;