import React from "react";
import Header from "../../Header-Footer/header";
import Footer from "../../Header-Footer/footer";
import {
    TextField,
    Grid,
    InputLabel,
    Container,
    Button
} from "@material-ui/core";
import "./contact.css";

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="contactUsBanner">
                <span className="bannerHeadding">
                    <h1>Contact US</h1>
                </span>

            </div>

            <div className="files">
                <Container >
                    <Grid item xs={12} style={{ display: "flex" }}>
                        <Grid xs={8}>
                            &nbsp;

                            <Container>
                                <div className="contactUform">
                                    <Grid container spacing={3} xs={12}>
                                        <Grid item xs={6}>
                                            <InputLabel>Username</InputLabel>
                                            <TextField
                                                id="outlined-basic"
                                                size="small"
                                                label="Username"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Email Address </InputLabel>
                                            <TextField
                                                id="outlined-basic"
                                                size="small"
                                                label="Email address"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel>Subject</InputLabel>
                                            <TextField
                                                id="outlined-basic"
                                                size="small"
                                                label="Subject"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Message"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Button
                                                color="primary"
                                                disableElevation
                                                variant="contained"
                                                fullWidth
                                            >
                                                {" "}
                                                Submit{" "}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>

                        </Grid>

                    </Grid>
                </Container>
            </div>

            &nbsp;
            <Footer />
        </>
    );
};

export default ContactUs;
