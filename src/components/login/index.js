import {Button,TextField,Grid,Paper,Typography} from "@material-ui/core";
import React, { useContext, useState, } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function Login(props) {
    const context = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'secret') {
            context.authenticate(username, password);
        } else {
            alert('Incorrect Credentials! Try admin - secret');
        }
    }
    const { from } = { from: { pathname: "/explore" } };
        return context.isAuthenticated ? (
            <Redirect to={from} />
          ) : (
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
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                type="username"
                                                placeholder="Username"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={username}
                                                onChange={(event) => setUsername(event.target.value)}
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
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}
                                                required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                                onClick={handleSubmit}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
}
