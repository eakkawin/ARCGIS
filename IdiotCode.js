var date = bday.value.split("/");
            var day = date[1];
            var month = date[0];
            var year = date[2];
            var checkyear = 2017 - parseInt(year);
            var checkmonth = 7 - parseInt(month);
            var checkday = 4 - parseInt(day);
            var checkage = parseInt(age.value);
            if(checkmonth > 0){
                if(checkyear != 0){
                    checkyear = checkyear-1;
                    if(checkyear!=checkage){
                        error.innerHTML = 'Incorrect age not sync with date of birth';
                        return false;
                    }else if(checkyear < 0){
                        error.innerHTML = 'Wrong birth date';
                        return false;
                    }else{
                        return confirm('Form is valid, press OK to submit');
                    }
                }else{
                    if(checkyear!=checkage){
                        error.innerHTML = 'Incorrect age not sync with date of birth';
                        return false;
                    }else if(checkyear < 0){
                        error.innerHTML = 'Wrong birth date';
                        return false;
                    }else{
                        return confirm('Form is valid, press OK to submit');
                    }
                }
                
            }else if(checkmonth == 0){
                if(checkday > 0){
                    if(checkyear != 0){
                        checkyear = checkyear-1;
                        if(checkyear!=checkage){
                            error.innerHTML = 'Incorrect age not sync with date of birth';
                            return false;
                        }else if(checkyear < 0){
                            error.innerHTML = 'Wrong birth date';
                            return false;
                        }else{
                            return confirm('Form is valid, press OK to submit');
                        }
                    }else{
                        if(checkyear!=checkage){
                            error.innerHTML = 'Incorrect age not sync with date of birth';
                            return false;
                        }else if(checkyear < 0){
                            error.innerHTML = 'Wrong birth date';
                            return false;
                        }else{
                            return confirm('Form is valid, press OK to submit');
                        }
                    }
                }else if(checkday < 0){
                    if(checkyear != 0){
                        checkyear = checkyear-1;
                        console.log(checkyear);
                        if(checkyear!=checkage){
                            error.innerHTML = 'Incorrect age not sync with date of birth';
                            return false;
                        }else if(checkyear < 0){
                            error.innerHTML = 'Wrong birth date';
                            return false;
                        }else{
                            return confirm('Form is valid, press OK to submit');
                        }
                    }else{
                        if(checkyear!=checkage){
                            error.innerHTML = 'Incorrect age not sync with date of birth';
                            return false;
                        }else if(checkyear < 0){
                            error.innerHTML = 'Wrong birth date';
                            return false;
                        }else{
                            return confirm('Form is valid, press OK to submit');
                        }
                    }
                }else{
                    
                    if(checkyear!=checkage){
                        error.innerHTML = 'Incorrect age not sync with date of birth';
                        return false;
                    }else if(checkyear < 0){
                        error.innerHTML = 'Wrong birth date';
                        return false;
                    }else{
                        return confirm('Form is valid, press OK to submit');
                    }
                }
            }else{
                checkyear = checkyear-1;
                if(checkyear!=checkage){
                    error.innerHTML = 'Incorrect age not sync with date of birth';
                    return false;
                }else if(checkyear < 0){
                    error.innerHTML = 'Wrong birth date';
                    return false;
                }else{
                    return confirm('Form is valid, press OK to submit');
                }
            }
            return confirm('Form is valid, press OK to submit');