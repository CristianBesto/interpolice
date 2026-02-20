-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2026 a las 15:51:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `interpolice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudadano`
--

CREATE TABLE `ciudadano` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `apodo` varchar(200) DEFAULT NULL,
  `fechaNace` date NOT NULL,
  `planetaOrigen` varchar(200) NOT NULL,
  `planetaReside` varchar(200) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `codigoQr` varchar(250) NOT NULL,
  `estado` varchar(1) NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudadano`
--

INSERT INTO `ciudadano` (`codigo`, `nombre`, `apellido`, `apodo`, `fechaNace`, `planetaOrigen`, `planetaReside`, `foto`, `codigoQr`, `estado`) VALUES
(1, 'Juan', 'Perez Lopez', 'Rotpull, care lapida', '2015-12-01', 'Tierra', 'Marte', NULL, '12345678', 'A'),
(3, 'Yesly Yasiri', 'Lopez', 'Señora Codigo', '2000-10-18', 'jupiter', 'marte', 'foto.jpg', '99998888', 'A'),
(4, 'juanito', 'perez', 'cabeza de motor', '2000-10-18', 'jupiter', 'marte', 'foto.jpg', '123456', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `rol` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`codigo`, `nombre`, `apellido`, `email`, `password`, `avatar`, `rol`) VALUES
(1, 'Criss', 'Sierra', 'cristo0595@gmail.com', '123', 'aeiou', 'ADMIN'),
(2, 'Lulu', 'Naranjo', 'lulito@gmail.com', '123', 'uoiea', 'USER'),
(4, 'Camilo', 'Bermudez', 'Camilo@gmail.com', '6543210', 'uoiea', 'ADMIN');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
