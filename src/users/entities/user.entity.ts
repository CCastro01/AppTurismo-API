import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    email: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    lastName: string;
  
    @Column({ nullable: false, type: 'varchar', length: 20 })
    role: string;
  
    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, type: 'varchar', length: 100 })
    address: string;

    @Column({ nullable: false, type: 'varchar', length: 20 })
    city: string;
  
    @Column({ nullable: false })
    salt: string;
  
    @Column({ nullable: true, type: 'varchar', length: 64 })
    confirmationToken: string;
  
    @Column({ nullable: true, type: 'varchar', length: 64 })
    recoverToken: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }