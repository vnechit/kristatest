--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 15.0

-- Started on 2023-09-15 11:52:14 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: nechist
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO nechist;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 24646)
-- Name: posts; Type: TABLE; Schema: public; Owner: api_user
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    name text NOT NULL,
    text text NOT NULL,
    email text NOT NULL
);


ALTER TABLE public.posts OWNER TO api_user;

--
-- TOC entry 209 (class 1259 OID 24645)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: api_user
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO api_user;

--
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 209
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: api_user
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- TOC entry 3452 (class 2604 OID 24649)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: api_user
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- TOC entry 3595 (class 0 OID 24646)
-- Dependencies: 210
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: api_user
--

INSERT INTO public.posts (id, name, text, email) VALUES (10, 'name3', 'text3', 'email3');
INSERT INTO public.posts (id, name, text, email) VALUES (1, 'name1', 'text1', 'email1');
INSERT INTO public.posts (id, name, text, email) VALUES (7, 'name2', 'text2', 'email2');
INSERT INTO public.posts (id, name, text, email) VALUES (11, 'name4', 'text4', 'email4');


--
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 209
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api_user
--

SELECT pg_catalog.setval('public.posts_id_seq', 48, true);


--
-- TOC entry 3454 (class 2606 OID 24653)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: api_user
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: nechist
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-09-15 11:52:14 MSK

--
-- PostgreSQL database dump complete
--

