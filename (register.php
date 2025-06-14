
<?php
$dataFile = 'users.json';

// Existing data load
$data = [];
if (file_exists($dataFile)) {
    $data = json_decode(file_get_contents($dataFile), true);
}

// New user data
$newUser = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'referral' => $_POST['referral'],
    'password' => password_hash($_POST['password'], PASSWORD_DEFAULT)
];

$data[] = $newUser;

// Save to file
file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));

echo "Registration Successful! <a href='admin.html'>View Referrals</a>";
?>
