import {Button,TextField,Grid,Paper,Typography} from "@material-ui/core";
import React, { useContext, useState, } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Login(props) {
    const context = useContext(AuthContext);
    const [state, setState] = useState({ username: "", password:""});


    const handleChange = (event) => {
        setState({ username: event.state.username, password: event.state.password });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.username == 'admin@admin.com' && state.password == 'secret') {
            context.authenticate(state.username, "pass1");
            props.history.push("/explore");
        } else {
            alert('Incorrect Credentials! Try admin - secret');
        }
    }

        return (
            <div>

                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form"
                        >
                            <Paper
                            variant="elevation"
                            elevation={2}
                            className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                    Login
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={state.username}
                                                onChange={(event) =>
                                                setState({
                                                [event.target.name]: event.target.value,
                                                })
                                                }
                                                required
                                                autoFocus
                                            />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={state.password}
                                                onChange={(event) =>
                                                setState({
                                                [event.target.name]: event.target.value,
                                                })
                                                }
                                                required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
}
