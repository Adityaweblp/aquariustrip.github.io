<?php 
  $success_msg = $error_msg = $name_error = $email_error = $phone_error = $address_error = $message_error = null;
  if(isset($_POST['submit']) && $_POST['submit']){

    $name = isset($_POST['name']) && $_POST['name'] ? $_POST['name'] : null;
    $name_error = is_null($name) ? 'name is required' : null ;
    $email = isset($_POST['email']) && $_POST['email'] ? $_POST['email'] : null;
    $email_error = is_null($email) ? 'email is required' : null ;
    $phone = isset($_POST['phone']) && $_POST['phone'] ? $_POST['phone'] : null;
    $phone_error = is_null($phone) ? 'phone is required' : null ;


     $state = isset($_POST['state']) && $_POST['state'] ? $_POST['state'] : null;
    $state_error = is_null($state) ? 'state is required' : null ;

    $message = isset($_POST['message']) && $_POST['message'] ? $_POST['message'] : null;
    $message_error = is_null($message) ? 'message is required' : null ;
    // var_dump($name, $email);
    // die();
    if (!empty($_POST['subject']) && (bool) $_POST['subject'] == true) {        // 
      $error_msg = "Something went wrong, please try again.";
    }else{
      // send mail
      $to = "aquariustrip2@gmail.com";
      
      $subject = "Enquiry for Aquarius Trip";

      $message = "<table border='1px' cellpadding='0' cellspacing='0' style='width:70%'>
                <tr>
                    <th style='padding:10px;width:120px'>Name</th>
                    <td style='padding:10px'>" . $name . "</td>
                </tr>
                <tr>
                    <th style='padding:10px'>Mobile</th>
                    <td style='padding:10px'>" . $phone . "</td>
                </tr>
                <tr>
                    <th style='padding:10px'>Email</th>
                    <td style='padding:10px'>" . $email . "</td>
                </tr>
                
                <tr>
                    <th style='padding:10px'>State</th>
                    <td style='padding:10px'>" . $state . "</td>
                </tr>
                

                <tr>
                    <th style='padding:10px'>Message</th>
                    <td style='padding:10px'>" . $message . "</td>
                </tr>
            </table>";

      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

      $headers .= 'From: <aquariustrip2@gmail.com>' . "\r\n";
      $headers .= 'Cc: aquariustrip2@gmail.com' . "\r\n";

      $send = @mail($to,$subject,$message,$headers);
      if($send){
        $success_msg = header('http://adityaweblp.github.io/aquariustrip.github.io/thankyou.html');
      }else{
        $error_msg = header('Location:');
      }
    }
  }

  ?>
