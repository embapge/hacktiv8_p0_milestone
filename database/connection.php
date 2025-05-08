<?php
class Database
{
    private $connection;
    public function __construct()
    {
        $this->connection = new mysqli("localhost", "root", "", "hacktiv8_p0_milestone", 3306);

        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }
}
